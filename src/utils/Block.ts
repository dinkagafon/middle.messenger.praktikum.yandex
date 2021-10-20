/* eslint-disable class-methods-use-this */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { v4 as makeUUID } from 'uuid';
import Attrs from '../types/Attrs';
import Events from '../types/Events';
import Props from '../types/Props';
import EventBus from './EventBus';

type BlockMeta = {
  tagName: string;
  props: Props;
  attrs: Attrs;
};

class Block {
  public meta: BlockMeta;

  public props: Props;

  public attrs: Attrs;

  public components: { [index: string]: Block } | undefined;

  public eventBus: () => EventBus;

  public id: string;

  private elementIn: HTMLElement;

  static EVENTS = {
    INIT: 'init',
    FLOW_CDM: 'flow:component-did-mount',
    FLOW_CDU: 'flow:component-did-update',
    FLOW_RENDER: 'flow:render',
  };

  constructor(tagName: string = 'div', attrs: Attrs = {}, props: Props = {}) {
    const eventBus = new EventBus();
    this.meta = {
      tagName,
      props,
      attrs,
    };
    this.id = makeUUID();
    const propsWithThis = { ...props };
    if (propsWithThis.events) {
      propsWithThis.events = this.bindBlockToEvents(propsWithThis.events);
    }
    this.props = this.makePropsProxy(propsWithThis);
    this.attrs = attrs;
    this.eventBus = () => eventBus;
    this.registerEvents(eventBus);
    eventBus.emit(Block.EVENTS.INIT);
  }

  private registerEvents(eventBus: EventBus) {
    eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDM, this.componentDidMountIn.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDU, this.componentDidUpdateIn.bind(this));
    eventBus.on(Block.EVENTS.FLOW_RENDER, this.renderIn.bind(this));
  }

  private bindBlockToEvents(events: Events): Events {
    const newEvents: Events = {};
    Object.entries(events).forEach(([event, func]) => {
      newEvents[event] = (e) => {
        func(e, this);
      };
    });
    return newEvents;
  }

  private makePropsProxy(props: Props) {
    const proxy = new Proxy(props, {
      set: (target, prop: string, val: any) => {
        const old: Props = { ...target };
        if (prop === 'events') {
          // eslint-disable-next-line no-param-reassign
          target[prop] = this.bindBlockToEvents(val);
          return true;
        }
        // eslint-disable-next-line no-param-reassign
        target[prop] = val;
        this.eventBus().emit(Block.EVENTS.FLOW_CDU, old, target);
        return true;
      },
    });
    return proxy;
  }

  private init() {
    this.createResources();
    this.eventBus().emit(Block.EVENTS.FLOW_CDM);
  }

  private createResources() {
    const { tagName } = this.meta;
    this.elementIn = document.createElement(tagName);
  }

  private componentDidMountIn() {
    this.componentDidMount();
    this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
  }

  private renderBlocks(block: string) {
    const fragment = document.createElement('template');
    fragment.innerHTML = block;
    Object.values(this.props)
      .reduce((blockProps, value) => {
        if (Array.isArray(value) && value.every((v) => v instanceof Block)) {
          return blockProps.concat(value);
        }
        if (value instanceof Block) {
          blockProps.push(value);
        }
        return blockProps;
      }, [])
      .forEach((value: Block) => {
        const stub = fragment.content.querySelector(`[data-uuid="${value.id}"]`);
        if (stub) {
          stub.replaceWith(value.element);
        }
      });
    return fragment.content;
  }

  private renderIn() {
    const block: string = this.render();
    this.removeEvents();
    this.removeAttrs();
    const content: DocumentFragment = this.renderBlocks(block);
    this.elementIn.innerHTML = '';
    this.elementIn.appendChild(content);
    this.addAttrs();
    this.addEvents();
  }

  private addAttrs() {
    Object.entries(this.attrs).forEach(([attr, value]) => {
      this.elementIn.setAttribute(attr, value);
    });
  }

  private removeAttrs() {
    Object.keys(this.attrs).forEach((attr) => {
      this.elementIn.removeAttribute(attr);
    });
  }

  toString() {
    return `<div data-uuid = ${this.id}></div>`;
  }

  private removeEvents() {
    if (!this.props.events) {
      return;
    }
    Object.entries(this.props.events).forEach(([eventName, eventFunc]) => {
      this.element.removeEventListener(eventName, eventFunc);
    });
  }

  private addEvents() {
    if (!this.props.events) {
      return;
    }
    Object.entries(this.props.events).forEach(([eventName, eventFunc]) => {
      this.element.addEventListener(eventName, eventFunc);
    });
  }

  private componentDidUpdateIn(oldProps: Props, newProps: Props) {
    this.componentDidUpdate(oldProps, newProps);
    if (oldProps !== newProps) {
      this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
    }
  }

  get element() {
    return this.elementIn;
  }

  public setProps(nextProps: Props) {
    if (!nextProps) {
      return;
    }
    Object.assign(this.props, nextProps);
  }

  public render(): string {
    return '';
  }

  public componentDidMount() {}

  public componentDidUpdate(_oldProps: Props, _newProps: Props) {}
}
export default Block;
