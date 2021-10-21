import BlockEvent from '../../types/BlockEvent';
import Block from '../../utils/Block';
import inputFile from './inputFile.pug';

class InputFile extends Block {
  constructor(props: {
    onchange: BlockEvent,
    accept: string,
    id: string,
  }) {
    super('input', {
      type: 'file',
      accept: props.accept,
      id: props.id,
    }, {
      events: {
        change: props.onchange,
      },
    });
  }

  setClass() {
    const baseClass = 'input-file';

    this.attrs.class = baseClass;
  }

  render() {
    this.setClass();
    return inputFile(this.props);
  }
}

export default InputFile;
