import Block from '../../utils/Block';
import ProfileButton from '../ProfileButton';
import chatWindow from './chatWindow.pug';
import imageURL from '../../../static/img/avatar.jpg';
import Input from '../Input';

class ChatWindow extends Block {
  constructor() {
    super('div', {}, {
      profile: new ProfileButton({
        avatar: imageURL,
        link: '/profile',
        name: 'Агафонов Никита',
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

  render() {
    this.setClass();
    return chatWindow(this.props);
  }
}

export default ChatWindow;
