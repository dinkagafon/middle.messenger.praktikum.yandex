import jsdom from 'jsdom-global';
import { expect } from 'chai';
import Block from './Block';

describe('Block', () => {
  beforeEach(function regDom() { this.jsdom = jsdom(undefined, { url: 'http://localhost:1234' }); });
  afterEach(function unregDom() {
    this.jsdom();
  });
  it('should create html element with tag span', () => {
    const block = new Block('span');
    expect(block.element).to.be.an.instanceof(HTMLElement);
    expect(block.element.tagName).to.equal('SPAN');
  });
  it('should change innerHTML after change props', () => {
    class Comp extends Block {
      constructor() {
        super('span', {}, {
          test: 'test',
        });
      }

      render() {
        return this.props.test;
      }
    }
    const block = new Comp();
    expect(block.element.innerHTML).to.equal('test');
    block.setProps({ test: 'cool' });
    expect(block.element.innerHTML).to.equal('cool');
  });
});
