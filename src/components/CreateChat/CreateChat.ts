import ChatsService from '../../services/ChatsService';
import Block from '../../utils/Block';
import MainForm from '../MainForm';
import createChat from './createChat.pug';

class CreateChat extends Block {
  constructor() {
    super('div', {}, {
      form: new MainForm<{ name: string }>({
        valid: true,
        buttonText: 'Создать чат',
        fields: [{
          placeholder: 'Название текст',
          name: 'name',
          type: 'text',
        }],
        submit: async (formObj) => {
          ChatsService.create({ title: formObj.name });
        },
      }),
    });
  }

  setClass() {
    const baseClass = 'create-chat';
    this.attrs.class = baseClass;
  }

  render() {
    this.setClass();
    return createChat(this.props);
  }
}

export default CreateChat;
