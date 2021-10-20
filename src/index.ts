import Reg from './pages/reg/Reg';
import Auth from './pages/auth/Auth';
import Chat from './pages/chat/Chat';
import Error404 from './pages/404';
import Error500 from './pages/500';
import Profile from './pages/profile';

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
      case '/reg.html':
        page = new Reg();
        break;
      case '/auth.html':
        page = new Auth();
        break;
      case '/chat.html':
        page = new Chat();
        break;
      case '/profile.html':
        page = new Profile();
        break;
      case '/500.html':
        page = new Error500();
        break;
      default:
        page = new Error404();
        break;
    }
    root.appendChild(page.element);
  }
  render('.root');
});
