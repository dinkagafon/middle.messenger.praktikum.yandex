import Block from '../../utils/Block';
import error500 from './error500.pug';
import Helper from '../../components/Helper';

export default class Error500 extends Block {
  constructor() {
    super('div', {}, {
      helper: new Helper({
        text: 'Ошибка 500. Мы скоро все починим',
        link: '/',
        textLink: 'Перейти на главную',
      }),
    });
  }

  render() {
    return error500({
      helper: this.props.helper,
    });
  }
}
