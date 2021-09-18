import Block from '../../utils/Block';
import Events from '../../types/Events';

class Input extends Block {
  constructor(props: {
    placeholder: string,
    name: string,
    type: string,
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
    });
  }

  setClass() {
    let baseClass = 'input';
    if (this.props.wrong) {
      baseClass = `${baseClass} input_wrong`;
    }
    this.attrs.class = baseClass;
  }

  render() {
    this.setClass();
    return '';
  }
}

export default Input;
