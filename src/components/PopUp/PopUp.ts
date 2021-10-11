import BlockEvent from '../../types/BlockEvent';
import Block from '../../utils/Block';
import popUp from './popUp.pug';

class Button extends Block {
  constructor(props: {
    content: Block,
    disableFunc: BlockEvent,
    active: boolean,
  }) {
    super('div', {}, {
      content: props.content,
      events: {
        click: props.disableFunc,
      },
      active: props.active
    });
  }

  setClass() {
    let baseClass = 'popUp';
    if (this.props.active) {
      baseClass = `${baseClass} popUp_active`;
    } else {
      baseClass = `${baseClass} popUp_disable`;
    }

    this.attrs.class = baseClass;
  }

  render() {
    this.setClass()
    return popUp(this.props);
  }
}

export default Button;
