import Block from '../../block/Block';
import Events from '../../types/Events';

class Input extends Block {
  constructor(props: {
    placeholder: string,
    name: string,
    events?: Events,
    validFunc?: (v: string) => boolean
  }) {
    super('input', {
      class: 'input',
      placeholder: props.placeholder,
      name: props.name,
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

  componentDidMount() {
    this.setClass();
  }

  componentDidUpdate() {
    this.setClass();
  }
}

export default Input;
