import ChatsList from '../../components/ChatsList';
import Block from '../../utils/Block';
import chat from './chat.pug';
import imageURL from '../../../static/img/avatar.jpg';
import Input from '../../components/Input';
import ChatWindow from '../../components/ChatWindow';

export default class Chat extends Block {
  constructor() {
    super('div', {}, {
      chatList: new ChatsList({
        chats: [{
          author: 'Анастасия, Анастасия, Анастасия, Анастасия, Анастасия, Анастасия,',
          message: 'Существуют две основные трактовки понятия «текст»: имманентная (расширенная, философски нагруженная) и репрезентативная (более частная).',
          date: '22.01.21',
          count: '0',
          img: imageURL,
        }, {
          author: 'Анастасия',
          message: 'Существуют две основные ',
          date: '25.01.21',
          count: '2',
          img: imageURL,
        }, {
          author: 'Никита',
          message: 'Существуют',
          date: '25.01.21',
          count: '20',
          img: imageURL,
        }],
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
