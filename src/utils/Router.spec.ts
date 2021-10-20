import jsdom from 'jsdom-global';
import sinon from 'sinon';
import { expect } from 'chai';
import Block from './Block';
import Router from './Router';
import Route from './Route';

describe('Router', () => {
  beforeEach(function regDom() { this.jsdom = jsdom(undefined, { url: 'http://localhost:1234' }); });
  afterEach(function unregDom() {
    Router.instance = undefined;
    this.jsdom();
  });
  function initRouter() {
    const rootElem = window.document.createElement('div');
    const router = new Router(rootElem);
    return { router, rootElem };
  }
  it('should registrate two Routes', () => {
    const { router } = initRouter();
    router
      .use('/test/', Block)
      .use('/test2/', Block);
    expect(router.routes.length).to.eq(2);
    expect(router.routes[0]).to.be.an.instanceof(Route);
    expect(router.routes[1].pathname).to.eq('/test2/');
  });
  it('should add listener in popstate and render base route', () => {
    const { router, rootElem } = initRouter();
    router
      .use('/', Block)
      .use('/test2/', Block)
      .start();
    expect(rootElem.children.length).to.eq(1);
    expect(window.onpopstate).to.be.a('function');
  });
  it('should go to path', () => {
    const { router } = initRouter();
    router
      .use('/', Block)
      .use('/test2/', Block)
      .start();
    router.go('/test2/');
    expect(window.location.pathname).to.eq('/test2/');
    expect(window.history.length).to.eq(2);
  });
  it('should call back method', () => {
    const { router } = initRouter();
    const spydeFunc = sinon.spy(window.history, 'back');
    router.back();
    expect(spydeFunc.callCount).to.eq(1);
  });
  it('should call back forward', () => {
    const { router } = initRouter();
    const spydeFunc = sinon.spy(window.history, 'forward');
    router.forward();
    expect(spydeFunc.callCount).to.eq(1);
  });
});
