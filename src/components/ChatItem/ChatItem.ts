import setActiveChatId from '../../store/actrionCreaters/setActiveChatId';
import selectActiveChatId from '../../store/selectors/selectActiveChatId';
import Block from '../../utils/Block';
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
          Store.dispatch(setActiveChatId(this.props.id))
        }
      }
    });
  }

  setClass() {
    let baseClass = 'chat-item';
    if (this.props.active) {
      baseClass = `${baseClass} chat-item_active`
    }
    this.attrs.class = baseClass;
  }

  componentDidMount() {
    Store.subscribe((state) => {
      this.setProps({
        active: this.props.id === selectActiveChatId(state)
      })
    })
  }
  render() {
    this.setClass();
    return chatItem(this.props);
  }
}

export default ChatItem;
