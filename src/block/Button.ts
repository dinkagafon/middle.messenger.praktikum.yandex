import Props from '../types/Props';
import Block from './Block';
import button from './button.pug';

class Button extends Block {
  constructor(props: Props) {
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

  componentDidMount() {
    this.setClass();
  }

  componentDidUpdate() {
    this.setClass();
  }

  render() {
    return button(this.props);
  }
}

export default Button;
