import Block from '../../utils/Block';
import Router from '../../utils/Router';
import profileButton from './profileButton.pug';

class ProfileButton extends Block {
  constructor(props: {
    avatar: string,
    name: string,
    link?: string,
  }) {
    super('div', {}, {
      avatar: props.avatar,
      name: props.name,
      link: props.link,
      events: {
        click: () => {
          if (this.props.link) {
            (new Router()).go(this.props.link);
          }
        },
      },
    });
  }

  render() {
    return profileButton(this.props);
  }
}

export default ProfileButton;
