import jsdom from 'jsdom-global';
import { expect } from 'chai';
import Block from './Block';
import Router from './Router';

describe('Router', () => {
  beforeEach(function regDom() { this.jsdom = jsdom(); });
  afterEach(function unregDom() {
    Router.instance = undefined;
    this.jsdom();
  });
  function initRouter() {
    const rootElem = window.document.createElement('div');
    const router = new Router(rootElem);
    return router;
  }
  it('should registrate two Routes', () => {
    const router = initRouter();
    router
      .use('/test', Block)
      .use('/test2', Block);
    expect(router.routes.length).to.eq(2);
    expect(router.routes[1].pathname).to.eq('/test2');
  });
});
