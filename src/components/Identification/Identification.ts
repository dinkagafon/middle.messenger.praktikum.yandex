import Block from '../../utils/Block';
import Helper from '../Helper';
import MainForm from '../MainForm';
import identification from './identification.pug';

class Identification extends Block {
  constructor(props: {
    title: string,
    form: MainForm,
    helper: Helper,
  }) {
    super('div', {}, {
      title: props.title,
      form: props.form,
      helper: props.helper,
    });
  }

  // eslint-disable-next-line class-methods-use-this
  render() {
    return identification({
      title: this.props.title,
      form: this.props.form,
      helper: this.props.helper,
    });
  }
}

export default Identification;
