import Block from '../../utils/Block';
import ChatItem from '../ChatItem';
import Input from '../Input';
import ProfileButton from '../ProfileButton';
import chatsList from './chatsList.pug';
import Button from '../Button';
import Store from '../../utils/Store';
import selectChats from '../../store/selectors/selectChats';
import setChatNamePopUpActive from '../../store/actrionCreaters/setChatNamePopUpActive';
import memoize from '../../utils/memoize';
import transformDate from '../../utils/transformDate';
import selectProfile from '../../store/selectors/selectProfile';
import ChatsBar from '../ChatBar';
import getAvatar from '../../utils/getAvatar';

class ChatsList extends Block {
  constructor() {
    super('div', {}, {
      chatBar: new ChatsBar(),
      search: new Input({
        placeholder: 'Поиск по чатам',
        name: 'search',
        type: 'text',
        events: {
          input: (e: KeyboardEvent) => {
            if (!e.target) {
              return;
            }
            const input = e.target as HTMLInputElement;
            this.props.chatBar.setProps({
              searchValue: input.value,
            });
          },
        },
      }),
      addChatButton: new Button({
        content: 'Новый чат',
        onclick: () => {
          Store.dispatch(setChatNamePopUpActive());
        },
      }),
      profile: new ProfileButton({
        avatar: '',
        link: '/profile/',
        name: '',
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
        this.props.chatBar.setProps({
          chats: data.map((c) => {
            const lastMessege = c.messages ? c.messages[0] : c.last_message;
            return new ChatItem({
              id: c.id,
              author: c.title,
              message: lastMessege ? lastMessege.content : 'Пока нет сообщений',
              date: lastMessege ? transformDate(lastMessege.time) : '',
              count: c.unread_count,
              img: getAvatar(c.avatar),
            });
          }),
        });
      },
    );
    const memoizeGetProfile = memoize(
      (state) => selectProfile(state),
      (profile) => {
        if (!profile) {
          return;
        }
        this.props.profile.setProps({
          avatar: getAvatar(profile.avatar),
          name: `${profile.first_name} ${profile.second_name}`,
        });
      },
    );
    Store.subscribe((state) => {
      memoizeSelectChats(state);
      memoizeGetProfile(state);
    });
  }

  render() {
    this.setClass();
    return chatsList(this.props);
  }
}

export default ChatsList;
