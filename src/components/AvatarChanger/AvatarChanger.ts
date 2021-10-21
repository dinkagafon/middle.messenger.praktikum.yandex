import BlockEvent from '../../types/BlockEvent';
import Block from '../../utils/Block';
import InputFile from '../InputFile';
import avatarChanger from './avatarChanger.pug';

class AvatarChanger extends Block {
  constructor(props: {
    name: string,
    onchange: BlockEvent,
    avatarLink: string,
  }) {
    super('div', {}, {
      input: new InputFile({
        accept: 'image/*',
        id: props.name,
        onchange: props.onchange,
      }),
      forId: props.name,
      link: props.avatarLink,
    });
  }

  setClass() {
    const baseClass = 'avatar-changer';
    this.attrs.class = baseClass;
  }

  render() {
    this.setClass();
    return avatarChanger(this.props);
  }
}

export default AvatarChanger;
