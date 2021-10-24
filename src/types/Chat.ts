import Message from './Message';
import { User, Member } from './User';

type Chat = {
  id: number,
  title: string,
  avatar: string | null,
  unread_count: number,
  created_by: number,
  last_message: {
    user: User,
    time: string,
    content: string,
    id: number
  } | null,
  members?: Array<Member>,
  messages?: Array<Message>,
};

export default Chat;
