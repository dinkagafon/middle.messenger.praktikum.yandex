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
        mousedown: (e) => {
          if (e.target === e.currentTarget) {
            props.disableFunc();
          }
        },
      },
      active: props.active,
    });
  }

  setClass() {
    let baseClass = 'pop-up';
    if (this.props.active) {
      baseClass = `${baseClass} pop-up_active`;
    } else {
      baseClass = `${baseClass} pop-up_disable`;
    }

    this.attrs.class = baseClass;
  }

  render() {
    this.setClass();
    return popUp(this.props);
  }
}

export default Button;
