import BlockEvent from '../../types/BlockEvent';
import Block from '../../utils/Block';
import Button from '../Button';
import identification from './helper.pug';

class Helper extends Block {
  constructor(props: {
    text: string,
    textLink: string,
    onclick: BlockEvent,
  }) {
    super('div', {}, {
      text: props.text,
      link: new Button({
        onclick: props.onclick,
        content: props.textLink,
        theme: 'link',
      }),
    });
  }

  // eslint-disable-next-line class-methods-use-this
  render() {
    return identification({
      text: this.props.text,
      link: this.props.link,
    });
  }
}

export default Helper;
