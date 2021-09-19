import Block from '../../utils/Block';
import auth from './auth.pug';
import Helper from '../../components/Helper';
import Identification from '../../components/Identification';
import MainForm from '../../components/MainForm';

export default class AuthPage extends Block {
  constructor() {
    super('div', {}, {
      form: new Identification({
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
          submit: (formObj: Record<string, string>) => {
            // eslint-disable-next-line no-console
            console.log(formObj);
          },
        }),
        helper: new Helper({
          text: 'Нет аккаунта?',
          link: '/reg.html',
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
