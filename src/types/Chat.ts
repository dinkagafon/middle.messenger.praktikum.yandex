import Message from './Message';
import { User } from './User';

type Chat = {
  id: number,
  title: string,
  avatar: string,
  unread_count: number,
  last_message: {
    user: User,
    time: string,
    content: string
  }
  members?: Array<User>,
  token?: string,
  messages?: Array<Message>,
};

export default Chat;
