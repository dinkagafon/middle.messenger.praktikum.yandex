import UsersService from '../../services/UsersService';
import selectActiveChat from '../../store/selectors/selectActiveChat';
import Block from '../../utils/Block';
import memoize from '../../utils/memoize';
import Store from '../../utils/Store';
import ChatSettingsUsers from '../ChatSettingsUsers';
import Input from '../Input';
import chatSettings from './chatSettings.pug';

class ChatSettings extends Block {
  constructor() {
    super('div', {}, {
      header: '',
      members: new ChatSettingsUsers(),
      search: new Input({
        placeholder: 'Поиск пользователей',
        name: 'searchUsers',
        type: 'text',
        events: {
          input: (e: KeyboardEvent) => {
            if (!e.target) {
              return;
            }
            const input = e.target as HTMLInputElement;
            UsersService.search(input.value);
          },
        },
      }),
    });
  }

  setClass() {
    const baseClass = 'chat-settings';
    this.attrs.class = baseClass;
  }

  componentDidMount() {
    const memoizeSetTitle = memoize(
      (state) => selectActiveChat(state),
      (data) => {
        if (!data) {
          return;
        }
        this.setProps({
          header: data.title,
        });
      },
    );
    Store.subscribe((state) => {
      memoizeSetTitle(state);
    });
  }

  render() {
    this.setClass();
    return chatSettings(this.props);
  }
}

export default ChatSettings;
