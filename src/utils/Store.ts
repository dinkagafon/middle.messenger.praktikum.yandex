import Action from '../types/Action';
import Listener from './Listener';
import Reducer from './Reducer';

class Store {
  private state: Indexed = {};

  private listeners: Array<Listener> = [];

  private reducers: {
    [index: string]: Reducer
  } = {};

  public addReducer(name: string, reducer: Reducer) {
    this.reducers[name] = reducer;

    this.dispatch({
      type: '@@INIT',
    });
    return this;
  }

  public getState() {
    return this.state;
  }

  public dispatch(action: Action) {
    this.state = this.reducer(action);

    this.emitListeners();
  }

  private emitListeners() {
    this.listeners.forEach((listener) => listener(this.state));
  }

  public subscribe(listener: Listener) {
    listener(this.state);
    this.listeners.push(listener);
  }

  private reducer(action: Action) {
    const newState: Indexed = {};
    Object.entries(this.reducers).forEach(([key, reducer]) => {
      newState[key] = reducer(this.state[key], action);
    });

    return newState;
  }
}
export default new Store();
