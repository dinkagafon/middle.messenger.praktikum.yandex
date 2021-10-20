import Block from '../../utils/Block';
import message from './message.pug';

class Message extends Block {
  constructor(props: {
    id: number,
    text: string,
    date: string,
    self: boolean,
  }) {
    super('div', {}, {
      id: props.id,
      text: props.text,
      date: props.date,
      self: props.self,
    });
  }

  setClass() {
    let baseClass = 'message';
    if (this.props.self) {
      baseClass = `${baseClass} message__self`;
    }
    this.attrs.class = baseClass;
  }

  render() {
    this.setClass();
    return message(this.props);
  }
}

export default Message;
