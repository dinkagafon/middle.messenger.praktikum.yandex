import Block from '../../utils/Block';
import ChatItem from '../ChatItem';
import chatsBar from './chatsBar.pug';

class ChatsBar extends Block {
  constructor() {
    super('div', {}, {
      chats: [],
      searchValue: '',
    });
  }

  render() {
    const chats = this.props.chats
      .filter((chat: ChatItem) => chat.props.author.startsWith(this.props.searchValue));
    return chatsBar({
      chats,
    });
  }
}

export default ChatsBar;
