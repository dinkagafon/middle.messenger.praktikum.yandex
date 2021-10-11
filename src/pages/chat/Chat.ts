import ChatsList from '../../components/ChatsList';
import Block from '../../utils/Block';
import chat from './chat.pug';
import Input from '../../components/Input';
import ChatWindow from '../../components/ChatWindow';
import ChatsService from '../../services/ChatsService';
import Button from '../../components/Button';

export default class Chat extends Block {
  constructor() {
    super('div', {}, {
      chatList: new ChatsList({
        chats: [],
        addChatButton: new Button({
          text: 'Добавить чат',
          onclick: () => {
            ChatsService.create({title: 'Новый чат'})
          }
        }),
        search: new Input({
          placeholder: 'Поиск',
          name: 'search',
          type: 'text',
        }),
      }),
      chatWindow: new ChatWindow(),
    });
  }




  setClass() {
    const baseClass = 'chat';
    this.attrs.class = baseClass;
  }

  render() {
    this.setClass();
    return chat({
      chatList: this.props.chatList,
      chatWindow: this.props.chatWindow,
    });
  }
}
