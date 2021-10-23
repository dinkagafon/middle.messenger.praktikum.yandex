import './style.scss';
import Reg from './pages/reg/Reg';
import Auth from './pages/auth/Auth';
import Chat from './pages/chat/Chat';
import Profile from './pages/profile';
import Router from './utils/Router';
import createStore from './store/createStore';

document.addEventListener('DOMContentLoaded', () => {
  function render(query: string) {
    const root = document.querySelector(query) as HTMLElement;
    if (root === null) {
      return;
    }
    createStore();
    const router = new Router(root);
    router
      .use('/', Chat)
      .use('/auth/', Auth)
      .use('/reg/', Reg)
      .use('/profile/', Profile)
      .start();
  }

  render('.root');
});

interface StepFn {
  (): number;
  (value: number): StepFn;
}

function add(val: number): StepFn;
function add(): number;
function add(val?: number): StepFn | number {
  let sum = 0;
  if (typeof val !== 'number') {
    return sum;
  }
  sum += val;

  function carr(b: number): StepFn;
  function carr(): number;
  function carr(b?: number): number | StepFn {
    if (!b) {
      return sum;
    }
    sum += b;
    return carr;
  }
  return carr;
}

export default add;

add(); // => 0
add(1)(); // => 1
add(1)(2)(); // => 3
