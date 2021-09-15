import Block from '../block/Block';
import Form from '../components/Form/Form';
import form from './form.pug';

export default class AuthPage extends Block {
  constructor() {
    super('div', {}, {
      authForm: new Form({
        valid: true,
        buttonText: 'Зарегистрироваться',
        fields: [{
          placeholder: 'Имя',
          name: 'first_name',
          validFunc: (value: string) => /^[А-ЯA-Z][а-яёЁa-z]+$/.test(value),
        }, {
          placeholder: 'Фамилия',
          name: 'second_name',
          validFunc: (value: string) => /^[А-ЯA-Z][а-яёЁa-z]+$/.test(value),
        }],
        submit: (formObj: Record<string, string>) => {
          console.log(formObj);
        },
      }),
    });
  }

  render() {
    return form({
      authForm: this.props.authForm,
    });
  }
}
