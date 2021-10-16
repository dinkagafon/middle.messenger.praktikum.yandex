import MembersService from '../../services/MembersService';
import selectMembersWithUsers from '../../store/selectors/selectMembersWithUsers';
import Block from '../../utils/Block';
import memoize from '../../utils/memoize';
import Store from '../../utils/Store';
import Accordance from '../Accordance';
import Button from '../Button';

import ProfileButton from '../ProfileButton';
import chatSettingsUsers from './chatSettingsUsers.pug';

class ChatSettingsUsers extends Block {
  constructor() {
    super('div', {}, {
      members: [],
    });
  }

  componentDidMount() {
    const memoizeUsers = memoize(
      (state) => selectMembersWithUsers(state),
      (data) => {
        this.setProps({
          members: data.map((member) => new Accordance({
            lhs: new ProfileButton({
              avatar: member.avatar,
              name: `${member.first_name} ${member.second_name} (${member.login})`,
              link: `/user/${member.login}`,
            }),
            rhs: new Button({
              text: member.role ? 'Удалить' : 'Добавить',
              onclick: () => {
                if (member.id) {
                  MembersService.add(+member.id);
                }
              },
            }),
          })),
        });
      },
    );
    Store.subscribe((state) => {
      memoizeUsers(state);
    });
  }

  render() {
    return chatSettingsUsers(this.props);
  }
}

export default ChatSettingsUsers;
