import Block from '../../utils/Block';
import identification from './helper.pug';

class Helper extends Block {
  constructor(props: {
    text: string,
    link: string,
    textLink: string
  }) {
    super('div', {}, {
      text: props.text,
      link: props.link,
      textLink: props.textLink,
    });
  }

  // eslint-disable-next-line class-methods-use-this
  render() {
    return identification({
      text: this.props.text,
      link: this.props.link,
      textLink: this.props.textLink,
    });
  }
}

export default Helper;
