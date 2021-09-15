import RegPage from './pages/RegPage';

document.addEventListener('DOMContentLoaded', () => {
  function render(query: string) {
    const root = document.querySelector(query);
    if (root === null) {
      return;
    }
    const button = new RegPage();
    root.appendChild(button.element);
  }
  render('.root');
});
