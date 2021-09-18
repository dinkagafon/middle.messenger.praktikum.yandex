import Block from '../../utils/Block';
import chatItem from './chatItem.pug';

class ChatItem extends Block {
  constructor(props: {
    author: string,
    message: string,
    date: string,
    count: string,
    img: string,
  }) {
    super('div', {}, {
      author: props.author,
      message: props.message,
      date: props.date,
      count: props.count,
      img: props.img,
    });
  }

  setClass() {
    const baseClass = 'chat-item';
    this.attrs.class = baseClass;
  }

  render() {
    this.setClass();
    return chatItem(this.props);
  }
}

export default ChatItem;
