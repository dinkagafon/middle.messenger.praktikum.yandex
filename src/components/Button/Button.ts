import Events from '../../types/Events';
import Block from '../../utils/Block';
import button from './button.pug';

class Button extends Block {
  constructor(props: {
    fullWidth?: boolean,
    text: string,
    events: Events,
  }) {
    super('button', {}, {
      fullWidth: props.fullWidth,
      text: props.text,
      events: props.events,
    });
  }

  setClass() {
    let baseClass = 'button';
    if (this.props.fullWidth) {
      baseClass = `${baseClass} button_fullWidth`;
    }
    this.attrs.class = baseClass;
  }

  render() {
    this.setClass();
    return button(this.props);
  }
}

export default Button;
