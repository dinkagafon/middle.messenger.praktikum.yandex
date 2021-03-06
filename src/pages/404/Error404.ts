import Block from '../../utils/Block';
import error404 from './error404.pug';
import Helper from '../../components/Helper';
import Router from '../../utils/Router';

export default class Error404 extends Block {
  constructor() {
    super('div', {}, {
      helper: new Helper({
        text: 'Ошибка 404. Такой страницы нет',
        textLink: 'Перейти на главную',
        onclick: () => {
          (new Router()).go('/');
        },
      }),
    });
  }

  render() {
    return error404({
      helper: this.props.helper,
    });
  }
}
