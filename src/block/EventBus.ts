type Listener = Array<(...args: any[]) => {} | null>;

type Listeners = {
  [index: string]: Listener;
};

class EventBus {
  listeners: Listeners;

  constructor() {
    this.listeners = {};
  }

  on(event: string, callback: () => {}): void {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }

    this.listeners[event].push(callback);
  }

  off(event: string, callback: () => {}) {
    if (!this.listeners[event]) {
      throw new Error(`Нет события: ${event}`);
    }

    this.listeners[event] = this.listeners[event].filter(
      (listener) => listener !== callback,
    );
  }

  emit(event: string, ...args: any[]) {
    if (!this.listeners[event]) {
      throw new Error(`Нет события: ${event}`);
    }
    this.listeners[event].forEach((listener) => {
      listener(...args);
    });
  }
}

export default EventBus;
