import ChatsService from '../../services/ChatsService';
import selectActiveChat from '../../store/selectors/selectActiveChat';
import Block from '../../utils/Block';
import memoize from '../../utils/memoize';
import Store from '../../utils/Store';
import chatItem from './chatItem.pug';

class ChatItem extends Block {
  constructor(props: {
    id: number,
    author: string,
    message: string,
    date: string,
    count: number,
    img: string,
  }) {
    super('div', {}, {
      id: props.id,
      author: props.author,
      message: props.message,
      date: props.date,
      count: props.count,
      img: props.img,
      active: false,
      events: {
        click: () => {
          ChatsService.get(this.props.id);
        },
      },
    });
  }

  setClass() {
    let baseClass = 'chat-item';
    if (this.props.active) {
      baseClass = `${baseClass} chat-item_active`;
    }
    this.attrs.class = baseClass;
  }

  componentDidMount() {
    const memoizeActiveChat = memoize(
      (state) => selectActiveChat(state),
      (data) => {
        if (!data) {
          return;
        }
        this.setProps({
          active: this.props.id === data.id,
        });
      },
    );
    Store.subscribe((state) => {
      memoizeActiveChat(state);
    });
  }

  render() {
    this.setClass();
    return chatItem(this.props);
  }
}

export default ChatItem;
