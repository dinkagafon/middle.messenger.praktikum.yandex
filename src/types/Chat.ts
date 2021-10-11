import { User } from "./User"


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
}

export default Chat