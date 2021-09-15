import Block from '../block/Block';
import Form from '../components/Form/Form';
import authPage from './authPage.pug';

export default class AuthPage extends Block {
  constructor() {
    super('div', {
      authForm: new Form({
        titleText: 'Вход',
        buttonText: 'Войти',
        fields: [{
          type: 'text',
          placeholder: 'Логин',
          name: 'login',
          valid: (value: string) => {
            if (value.length > 3 && value.length < 20) {
              return true;
            }
            return false;
          },
        }, {
          type: 'text',
          placeholder: 'Пароль',
          name: 'login',
        },
        ],
      }),
    });
  }

  render() {
    return authPage({
      authForm: this.props.authForm,
    });
  }
}
