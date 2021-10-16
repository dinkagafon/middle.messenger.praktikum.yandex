import Block from '../../utils/Block';
import accordance from './accordance.pug';

class Accordance extends Block {
  constructor(props: {
    lhs: Block,
    rhs: Block
  }) {
    super('div', {}, {
      lhs: props.lhs,
      rhs: props.rhs,
    });
  }

  render() {
    return accordance(this.props);
  }
}

export default Accordance;
