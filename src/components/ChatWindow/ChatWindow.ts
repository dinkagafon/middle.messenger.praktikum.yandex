import Block from '../../utils/Block';
import ProfileButton from '../ProfileButton';
import chatWindow from './chatWindow.pug';
import imageURL from '../../../static/img/avatar.jpg';
import Button from '../Button';
import Store from '../../utils/Store';
import selectActiveChat from '../../store/selectors/selectActiveChat';
import CreateMessege from '../CreateMessege';
import MessagesList from '../MessagesList';
import MembersService from '../../services/MembersService';
import Icon from '../Icon';

class ChatWindow extends Block {
  constructor() {
    super('div', {}, {
      profile: new ProfileButton({
        avatar: imageURL,
        name: '',
      }),
      chatSettingsButton: new Button({
        content: new Icon({
          name: 'sliders',
        }),
        theme: 'icon',
        onclick: () => MembersService.openMembersPopUp(),
      }),
      message: new CreateMessege(),
      messagesList: new MessagesList(),
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
