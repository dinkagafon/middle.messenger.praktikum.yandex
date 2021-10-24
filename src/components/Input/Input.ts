import Block from '../../utils/Block';
import Events from '../../types/Events';

class Input extends Block {
  constructor(props: {
    placeholder: string,
    name: string,
    type: string,
    fullHeight?: boolean,
    events?: Events,
    validFunc?: (v: string) => boolean
  }) {
    super('input', {
      class: 'input',
      placeholder: props.placeholder,
      name: props.name,
      type: props.type,
    }, {
      events: props.events,
      wrong: false,
      validFunc: props.validFunc,
      fullHeight: props.fullHeight,
      name: props.name,
    });
  }

  setClass() {
    let baseClass = 'input';
    if (this.props.wrong) {
      baseClass = `${baseClass} input_wrong`;
    }
    if (this.props.fullHeight) {
      baseClass = `${baseClass} input_fullHeight`;
    }
    this.attrs.class = baseClass;
  }

  render() {
    this.setClass();
    return '';
  }
}

export default Input;
