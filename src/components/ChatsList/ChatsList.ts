import Block from '../../utils/Block';
import ChatItem from '../ChatItem';
import Input from '../Input';
import ProfileButton from '../ProfileButton';
import chatsList from './chatsList.pug';
import imageURL from '../../../static/img/avatar.jpg';
import Chat from '../../types/Chat';
import Button from '../Button';
import Store from '../../utils/Store';
import selectChats from '../../store/selectors/selectChats';
import setChatNamePopUpActive from '../../store/actrionCreaters/setChatNamePopUpActive';
import memoize from '../../utils/memoize';

class ChatsList extends Block {
  constructor(props: {
    chats: Array<Chat>,
    search: Input,
  }) {
    super('div', {}, {
      chats: [],
      search: props.search,
      addChatButton: new Button({
        text: 'Добавить чат',
        onclick: () => {
          Store.dispatch(setChatNamePopUpActive());
        },
      }),
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
    const memoizeSelectChats = memoize(
      (state) => selectChats(state),
      (data) => {
        this.setProps({
          chats: data.map((c) => new ChatItem({
            id: c.id,
            author: c.title,
            message: c.last_message ? c.last_message.content : 'Нет сообщений',
            date: c.last_message ? c.last_message.time : '',
            count: c.unread_count,
            img: c.avatar,
          })),
        });
      },
    );
    Store.subscribe((state) => {
      memoizeSelectChats(state);
    });
  }

  render() {
    this.setClass();

    return chatsList(this.props);
  }
}

export default ChatsList;
