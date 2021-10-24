import MessgesService from '../../services/MessagesService';
import Block from '../../utils/Block';
import Button from '../Button';
import Input from '../Input';
import createMessege from './createMessege.pug';

class CreateMessege extends Block {
  constructor() {
    super('div', {}, {
      sendButton: new Button({
        content: 'Отправить',
        onclick: () => this.sendMessage(),
      }),
      inputMessage: new Input({
        placeholder: 'Напишите сообщение',
        name: 'message',
        type: 'text',
        fullHeight: true,
      }),
    });
  }

  sendMessage() {
    const input = this.props.inputMessage.element as HTMLInputElement;
    MessgesService.send(input.value);
    input.value = '';
  }

  componentDidMount() {
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        event.preventDefault();
        this.sendMessage();
      }
    });
  }

  render() {
    return createMessege(this.props);
  }
}

export default CreateMessege;
