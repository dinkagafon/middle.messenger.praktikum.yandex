import Block from '../../utils/Block';
import profileButton from './profileButton.pug';

class ProfileButton extends Block {
  constructor(props: {
    avatar: string,
    name: string,
    link: string,
  }) {
    super('a', {
      href: props.link,
    }, {
      avatar: props.avatar,
      name: props.name,
    });
  }

  render() {
    return profileButton(this.props);
  }
}

export default ProfileButton;
