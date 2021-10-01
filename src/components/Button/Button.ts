import BlockEvent from '../../types/BlockEvent';
import Block from '../../utils/Block';
import button from './button.pug';

class Button extends Block {
  constructor(props: {
    fullWidth?: boolean,
    text: string,
    onclick: BlockEvent,
    theme?: 'link'
  }) {
    super('button', {}, {
      fullWidth: props.fullWidth,
      text: props.text,
      theme: props.theme,
      events: {
        click: props.onclick,
      },
    });
  }

  setClass() {
    let baseClass = 'button';
    if (this.props.fullWidth) {
      baseClass = `${baseClass} button_fullWidth`;
    }
    if (this.props.theme) {
      baseClass = `${baseClass} button_theme_${this.props.theme}`;
    }
    this.attrs.class = baseClass;
  }

  render() {
    this.setClass();
    return button(this.props);
  }
}

export default Button;
