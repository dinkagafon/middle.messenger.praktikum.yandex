import Block from '../../utils/Block';
import profile from './profile.pug';
import Helper from '../../components/Helper';
import AuthService from '../../services/AuthService';
import ProfileEditor from '../../components/ProfileEditor';

export default class Profile extends Block {
  constructor() {
    super('div', {}, {
      regForm: new ProfileEditor({
        title: 'Изменение профиля',
        helper: new Helper({
          text: '',
          onclick: async () => {
            await AuthService.logout();
          },
          textLink: 'Выйти',
        }),
      }),
    });
  }

  componentDidMount() {
    document.title = 'Настройки профиля';
    AuthService.getProfile();
  }

  render() {
    return profile({
      form: this.props.regForm,
    });
  }
}
