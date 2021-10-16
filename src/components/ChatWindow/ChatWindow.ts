import Block from '../../utils/Block';
import ProfileButton from '../ProfileButton';
import chatWindow from './chatWindow.pug';
import imageURL from '../../../static/img/avatar.jpg';
import Input from '../Input';
import Button from '../Button';
import Store from '../../utils/Store';
import selectActiveChat from '../../store/selectors/selectActiveChat';
import setChatSettingsPopUpActive from '../../store/actrionCreaters/setChatSettingsPopUpActive';

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
          Store.dispatch(setChatSettingsPopUpActive());
        },
      }),
      input: new Input({
        placeholder: 'Напишите сообщение',
        name: 'message',
        type: 'text',
      }),
    });
  }

  setClass() {
    const baseClass = 'chat-window';
    this.attrs.class = baseClass;
  }

  componentDidMount() {
    Store.subscribe((state) => {
      const chat = selectActiveChat(state);
      if (!chat) {
        return;
      }
      this.props.profile.setProps({
        avatar: chat.avatar,
        name: chat.title,
      });
    });
  }

  render() {
    this.setClass();
    return chatWindow(this.props);
  }
}

export default ChatWindow;
