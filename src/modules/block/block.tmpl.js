
const block = `<div class="{{ className }}">
      <span onClick="{{ handleClick }}">{{text}}</span>
      <span>{{ user.info.firstName }}</span>
  </div>
  `;
   

const tmpl = new window.Templator(window.blockTemplate);

const context = {
      text: 'Мой очень важный span',
      className: 'chats',
      user: {
            info: {
                firstName: 'Alexander',
            },
      },
      handleClick: function() {
            console.log(document.body);
      }
};

const renderedTemplate = tmpl.compile(context);

const root = document.querySelector('.root');
root.innerHTML = `
<p>Результат после нажатия виден в консоли</p>
${renderedTemplate}
`; 