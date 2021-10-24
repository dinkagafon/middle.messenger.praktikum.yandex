import selectMessages from '../../store/selectors/selectMessages';
import Block from '../../utils/Block';
import memoize from '../../utils/memoize';
import Store from '../../utils/Store';
import messagesList from './messagesList.pug';
import Message from '../Message';
import selectProfile from '../../store/selectors/selectProfile';
import transformDate from '../../utils/transformDate';

class MessagesList extends Block {
  constructor() {
    super('div', {}, {
      messages: ['dssdf', 'sdfsf'],
    });
  }

  componentDidMount() {
    const memoizeMessages = memoize(
      (state) => {
        const messages = selectMessages(state);
        const profile = selectProfile(state);
        return {
          messages,
          profile,
        };
      },
      ({ messages, profile }) => {
        if (!messages || !profile) {
          return;
        }
        this.setProps({
          messages: messages.map((d) => new Message({
            id: d.id,
            text: d.content,
            date: transformDate(d.time),
            self: d.user_id === profile.id,
          })),
        });
      },
    );
    Store.subscribe((state) => {
      memoizeMessages(state);
    });
  }

  setClass() {
    const baseClass = 'messages-list';
    this.attrs.class = baseClass;
  }

  render() {
    this.setClass();
    return messagesList(this.props);
  }
}

export default MessagesList;
