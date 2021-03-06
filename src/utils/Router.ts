import Block from './Block';
import Route from './Route';

class Router {
  private currentRoot: HTMLElement;

  public static instance: Router | undefined;

  public routes: Array<Route>;

  private history: History;

  constructor(currentRoot?: HTMLElement) {
    if (Router.instance) {
      return Router.instance;
    }
    if (!currentRoot) {
      throw Error('undefind root node');
    }
    this.routes = [];
    this.history = window.history;
    this.currentRoot = currentRoot;

    Router.instance = this;
  }

  use(pathname: string, block: typeof Block) {
    const route = new Route(pathname, block, this.currentRoot);
    this.routes.push(route);
    return this;
  }

  start() {
    window.onpopstate = ((e) => {
      const window = e.target as Window;
      this.onRoute(window.location.pathname);
    });

    this.onRoute(window.location.pathname);
  }

  private onRoute(pathname: string) {
    const route = this.getRoute(pathname);
    if (!route) {
      return;
    }
    route.render();
  }

  go(pathname: string) {
    this.history.pushState({}, pathname, pathname);
    this.onRoute(pathname);
  }

  back() {
    this.history.back();
  }

  forward() {
    this.history.forward();
  }

  private getRoute(pathname: string) {
    return this.routes.find((route) => route.match(pathname));
  }
}
export default Router;
