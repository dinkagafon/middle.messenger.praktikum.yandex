import Block from '../../utils/Block';
import auth from './auth.pug';
import Helper from '../../components/Helper';
import Identification from '../../components/Identification';
import MainForm from '../../components/MainForm';
import AuthService from '../../services/AuthService';
import LoginRequest from '../../types/LoginRequest';
import Router from '../../utils/Router';
import memoize from '../../utils/memoize';
import selectAuthError from '../../store/selectors/selectAuthError';
import Store from '../../utils/Store';

export default class AuthPage extends Block {
  constructor() {
    super('div', {}, {
      form: new Identification<LoginRequest>({
        title: 'Вход',
        form: new MainForm({
          valid: true,
          buttonText: 'Войти',
          fields: [{
            placeholder: 'Логин',
            name: 'login',
            type: 'text',
          }, {
            placeholder: 'Пароль',
            name: 'password',
            type: 'password',
          }],
          submit: async (formObj) => {
            await AuthService.login(formObj);
          },
        }),
        helper: new Helper({
          text: 'Нет аккаунта?',
          onclick: () => {
            (new Router()).go('/reg/');
          },
          textLink: 'Регистрация',
        }),
      }),
    });
  }

  componentDidMount() {
    document.title = 'Вход';
    AuthService.checkNotAuth();
    const memoizeErrorMessage = memoize(
      (state) => selectAuthError(state),
      (error) => {
        if (!error) {
          return;
        }
        this.props.form.props.form.setProps({
          error: error.reason,
        });
      },
    );
    Store.subscribe((state) => {
      memoizeErrorMessage(state);
    });
  }

  render() {
    return auth({
      form: this.props.form,
    });
  }
}
