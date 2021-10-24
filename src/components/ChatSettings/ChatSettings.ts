import UsersService from '../../services/UsersService';
import selectActiveChat from '../../store/selectors/selectActiveChat';
import selectMembersWithUsers from '../../store/selectors/selectMembersWithUsers';
import Block from '../../utils/Block';
import memoize from '../../utils/memoize';
import Store from '../../utils/Store';
import ChatSettingsUsers from '../ChatSettingsUsers';
import Input from '../Input';
import chatSettings from './chatSettings.pug';
import checkChatRoot from '../../store/selectors/checkChatRoot';
import MemberItom from '../MemberItom';
import AvatarChanger from '../AvatarChanger';
import getAvatar from '../../utils/getAvatar';
import ChatsService from '../../services/ChatsService';

class ChatSettings extends Block {
  constructor() {
    super('div', {}, {
      header: '',
      avatarChanger: new AvatarChanger({
        name: 'avatarChat',
        avatarLink: getAvatar(''),
        onchange: (e) => {
          e?.preventDefault();
          const { files } = e?.target as HTMLInputElement;
          if (!files || !files[0]) {
            return;
          }
          const [file] = files;
          ChatsService.updateAvatar(file);
        },
      }),
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
            this.props.members.setProps({ searchValue: input.value });
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
        this.props.avatarChanger.setProps({
          avatarLink: getAvatar(data.avatar),
        });
      },
    );
    const memoizeUsers = memoize(
      (state) => ({
        members: selectMembersWithUsers(state),
        root: checkChatRoot(state),
      }),
      ({ members, root }) => {
        this.props.members.setProps({
          members: members.map((member) => new MemberItom({ root, member })),
        });
      },
    );
    const memoizeRoot = memoize(
      (state) => checkChatRoot(state),
      (root) => {
        if (!root) {
          this.props.avatarChanger.setProps({
            forId: '',
          });
        } else {
          this.props.avatarChanger.setProps({
            forId: 'avatarChat',
          });
        }
      },
    );
    Store.subscribe((state) => {
      memoizeSetTitle(state);
      memoizeUsers(state);
      memoizeRoot(state);
    });
  }

  render() {
    this.setClass();
    return chatSettings(this.props);
  }
}

export default ChatSettings;
