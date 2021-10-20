import Block from '../../utils/Block';
import MemberItom from '../MemberItom';

import chatSettingsUsers from './chatSettingsUsers.pug';

class ChatSettingsUsers extends Block {
  constructor() {
    super('div', {}, {
      searchValue: '',
      members: [],
    });
  }

  render() {
    const members = this.props.members
      .filter((chat: MemberItom) => chat.props.login.startsWith(this.props.searchValue));
    return chatSettingsUsers({
      members,
    });
  }
}

export default ChatSettingsUsers;
