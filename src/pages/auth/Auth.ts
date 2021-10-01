import Block from '../../utils/Block';
import auth from './auth.pug';
import Helper from '../../components/Helper';
import Identification from '../../components/Identification';
import MainForm from '../../components/MainForm';
import AuthService from '../../services/AuthService';
import LoginRequest from '../../types/LoginRequest';
import Router from '../../utils/Router';

const authService = new AuthService();

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
            await authService.login(formObj);
          },
        }),
        helper: new Helper({
          text: 'Нет аккаунта?',
          onclick: () => {
            (new Router()).go('/reg');
          },
          textLink: 'Регистрация',
        }),
      }),
    });
  }

  render() {
    return auth({
      form: this.props.form,
    });
  }
}
