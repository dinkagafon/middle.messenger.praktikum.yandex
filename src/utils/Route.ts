import Block from './Block';

class Route {
  public pathname: string;

  private BlockClass: typeof Block;

  private block: Block | null;

  private currentRoot: HTMLElement;

  constructor(pathname: string, view: typeof Block, currentRoot: HTMLElement) {
    this.pathname = pathname;
    this.BlockClass = view;
    this.block = null;
    this.currentRoot = currentRoot;
  }

  match(pathname: string) {
    return pathname === this.pathname;
  }

  render() {
    this.block = new this.BlockClass();
    this.currentRoot.innerHTML = '';
    this.currentRoot.appendChild(this.block.element);

    // this.block.show();
  }
}

export default Route;
