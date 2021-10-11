import Block from '../../utils/Block';
import ProfileButton from '../ProfileButton';
import chatWindow from './chatWindow.pug';
import imageURL from '../../../static/img/avatar.jpg';
import Input from '../Input';
import PopUp from '../PopUp';
import Button from '../Button';
import Store from '../../utils/Store';
import setChatSettingsDisable from '../../store/actrionCreaters/setChatSettingsDisable';
import selectChatSettingVisible from '../../store/selectors/selectChatSettingVisible';
import setChatSettingsActive from '../../store/actrionCreaters/setChatSettingsActive';

class ChatWindow extends Block {
  constructor() {
    super('div', {}, {
      profile: new ProfileButton({
        avatar: imageURL,
        link: '/profile',
        name: 'Агафонов Никита',
      }),
      chatSettingsButton: new Button({
        text: 'Настройки',
        onclick: () => {
          Store.dispatch(setChatSettingsActive())
        }
      }),
      input: new Input({
        placeholder: 'Напишите сообщение',
        name: 'message',
        type: 'text',
      }),
      chatSettings: new PopUp({
        disableFunc: () => {
          Store.dispatch(setChatSettingsDisable())
        },
        content: new Button({
          text: 'PopUP',
          onclick: () => {console.log('dsfsf')}
        }),
        active: true,
      })
    });
  }

  setClass() {
    const baseClass = 'chat-window';
    this.attrs.class = baseClass;
  }


  componentDidMount() {
    Store.subscribe((state) => {
      this.props.chatSettings.setProps({      
        active: selectChatSettingVisible(state)
      })
    })
  }


  render() {
    this.setClass();
    return chatWindow(this.props);
  }
}

export default ChatWindow;
