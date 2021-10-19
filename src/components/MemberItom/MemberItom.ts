import MembersService from '../../services/MembersService';
import { Member } from '../../types/User';
import Block from '../../utils/Block';
import Button from '../Button';
import Icon from '../Icon';
import ProfileButton from '../ProfileButton';
import memberItom from './memberItom.pug';

const getManageButton = (role: string, id: number, root: boolean) => {
  if (!root || role === 'admin') {
    return '';
  }
  if (role === 'none') {
    return new Button({
      content: new Icon({
        name: 'plus-square',
      }),
      theme: 'icon',
      onclick: () => MembersService.add(id),
    });
  }
  return new Button({
    content: new Icon({
      name: 'trash-2',
    }),
    theme: 'icon',
    onclick: () => MembersService.delete(id),
  });
};

class MemberItom extends Block {
  constructor(props: {
    root: boolean,
    member: Member
  }) {
    super('div', {}, {
      login: props.member.login,
      profile: new ProfileButton({
        avatar: props.member.avatar || '',
        name: `${props.member.first_name} ${props.member.second_name} (${props.member.login})`,
        link: `/user/${props.member.login}`,
      }),
      button: getManageButton(props.member.role, props.member.id, props.root),
    });
  }

  render() {
    return memberItom(this.props);
  }
}

export default MemberItom;
