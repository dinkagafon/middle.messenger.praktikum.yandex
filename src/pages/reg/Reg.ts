import Block from '../../utils/Block';
import reg from './reg.pug';
import MainForm from '../../components/MainForm';
import Identification from '../../components/Identification';
import Helper from '../../components/Helper';

export default class AuthPage extends Block {
  constructor() {
    super('div', {}, {
      regForm: new Identification({
        title: 'Регистрация',
        form: new MainForm({
          valid: true,
          buttonText: 'Зарегистрироваться',
          fields: [{
            placeholder: 'Имя',
            name: 'first_name',
            type: 'text',
            validFunc: (value: string) => /^[А-ЯA-Z][а-яёЁa-z]+$/.test(value),
          }, {
            placeholder: 'Фамилия',
            name: 'second_name',
            type: 'text',
            validFunc: (value: string) => /^[А-ЯA-Z][а-яёЁa-z]+$/.test(value),
          }, {
            placeholder: 'Логин',
            name: 'login',
            type: 'text',
            validFunc: (value: string) => /^(?=.*[a-zA-Z_-])[a-zA-Z0-9-_]{3,20}$/.test(value),
          }, {
            placeholder: 'Почта',
            name: 'email',
            type: 'text',
            validFunc: (value: string) => /^(?=.*[a-zA-Z_@-])[a-zA-Z_@-]+@[a-zA-Z_-]+\.[a-zA-Z_-]+$/.test(value),
          }, {
            placeholder: 'Телефон',
            name: 'phone',
            type: 'text',
            validFunc: (value: string) => /^[\d/+]\d{9,14}$/.test(value),
          }, {
            placeholder: 'Пароль',
            name: 'password',
            type: 'password',
            validFunc: (value: string) => /^(?=.*[A-ZА-Я])(?=.*\d).{8,40}$/.test(value),
          }],
          submit: (formObj: Record<string, string>) => {
            // eslint-disable-next-line no-console
            console.log(formObj);
          },
        }),
        helper: new Helper({
          text: 'Уже есть аккаунт?',
          link: '/auth.html',
          textLink: 'Вход',
        }),
      }),
    });
  }

  render() {
    return reg({
      form: this.props.regForm,
    });
  }
}
