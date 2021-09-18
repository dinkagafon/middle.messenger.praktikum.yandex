import Reg from './pages/reg/Reg';
import Auth from './pages/auth/Auth';
import Chat from './pages/chat/Chat';

document.addEventListener('DOMContentLoaded', () => {
  function render(query: string) {
    const root = document.querySelector(query);
    if (root === null) {
      return;
    }
    let page;
    const path = window.location.pathname;
    switch (path) {
      case '/':
        page = new Reg();
        break;
      case '/reg':
        page = new Reg();
        break;
      case '/auth':
        page = new Auth();
        break;
      case '/chat':
        page = new Chat();
        break;
      default:
        page = new Auth();
        break;
    }
    root.appendChild(page.element);
  }
  render('.root');
});
