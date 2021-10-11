import Block from '../../utils/Block';
import ChatItem from '../ChatItem';
import Input from '../Input';
import ProfileButton from '../ProfileButton';
import chatsList from './chatsList.pug';
import imageURL from '../../../static/img/avatar.jpg';
import Chat from '../../types/Chat';
import Button from '../Button';
import ChatsService from '../../services/ChatsService';
import Store from '../../utils/Store';
import selectChats from '../../store/selectors/selectChats';

class ChatsList extends Block {
  constructor(props: {
    chats: Array<Chat>,
    search: Input,
    addChatButton: Button
  }) {    
    super('div', {}, {
      chats: [],
      search: props.search,
      addChatButton: props.addChatButton,
      profile: new ProfileButton({
        avatar: imageURL,
        link: '/profile',
        name: 'Агафонов Никита',
      }),
    });
  }

  setClass() {
    const baseClass = 'chat-list';
    this.attrs.class = baseClass;
  }
  componentDidMount() {
    ChatsService.get()
    Store.subscribe((state) => {
      this.setProps({
        chats: selectChats(state).map((c) => new ChatItem({
          id: c.id,
          author: c.title,
          message: c.last_message ? c.last_message.content : 'Нет сообщений',
          date: c.last_message ? c.last_message.time : '',
          count: c.unread_count,
          img: c.avatar,
        }))
      })
    })
  }
  render() {
    this.setClass();
    
    return chatsList(this.props);
  }
}

export default ChatsList;
