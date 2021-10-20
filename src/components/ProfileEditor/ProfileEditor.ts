import UsersService from '../../services/UsersService';
import selectPasswordError from '../../store/selectors/selectPasswordError';
import selectProfileError from '../../store/selectors/selectProfileError';
import { UpdateProfileUser } from '../../types/User';
import Block from '../../utils/Block';
import memoize from '../../utils/memoize';
import Store from '../../utils/Store';
import Helper from '../Helper';
import MainForm from '../MainForm';
import profileEditor from './profileEditor.pug';

class ProfileEditor extends Block {
  constructor(props: {
    title: string,
    helper?: Helper,
  }) {
    super('div', {}, {
      title: props.title,
      dataForm: new MainForm({
        valid: true,
        buttonText: 'Изменить данные',
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
          placeholder: 'Отображаемый ник',
          name: 'display_name',
          type: 'text',
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
        }],
        submit: (formObj: UpdateProfileUser) => {
          UsersService.updateProfile(formObj);
        },
      }),
      passwordForm: new MainForm({
        valid: true,
        buttonText: 'Изменить Пароль',
        fields: [{
          placeholder: 'Старый пароль',
          name: 'oldPassword',
          type: 'password',
        }, {
          placeholder: 'Новый пароль',
          name: 'newPassword',
          type: 'password',
          validFunc: (value: string) => /^(?=.*[A-ZА-Я])(?=.*\d).{8,40}$/.test(value),
        }],
        submit: (formObj: {
          oldPassword: string,
          newPassword: string,
        }) => {
          UsersService.updatePassword(formObj);
        },
      }),
      helper: props.helper,
    });
  }

  componentDidMount() {
    const memoizeProfileError = memoize(
      (state) => selectProfileError(state),
      (error) => {
        this.props.dataForm.setProps({
          error: error ? error.reason : undefined,
        });
      },
    );
    const memoizePasswordError = memoize(
      (state) => selectPasswordError(state),
      (error) => {
        this.props.passwordForm.setProps({
          error: error ? error.reason : undefined,
        });
      },
    );
    Store.subscribe((state) => {
      memoizeProfileError(state);
      memoizePasswordError(state);
    });
  }

  render() {
    return profileEditor({
      title: this.props.title,
      dataForm: this.props.dataForm,
      passwordForm: this.props.passwordForm,
      helper: this.props.helper,
    });
  }
}

export default ProfileEditor;
