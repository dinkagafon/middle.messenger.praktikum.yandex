import Block from '../../utils/Block';
import ChatItem from '../ChatItem';
import Input from '../Input';
import ProfileButton from '../ProfileButton';
import chatsList from './chatsList.pug';
import imageURL from '../../../static/img/avatar.jpg';

class ChatsList extends Block {
  constructor(props: {
    chats: Array<{
      author: string,
      message: string,
      date: string,
      count: string,
      img: string,
    }>,
    search: Input,
  }) {
    super('div', {}, {
      chats: props.chats.map((c) => new ChatItem({
        author: c.author,
        message: c.message,
        date: c.date,
        count: c.count,
        img: c.img,
      })),
      search: props.search,
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

  render() {
    this.setClass();
    return chatsList(this.props);
  }
}

export default ChatsList;
