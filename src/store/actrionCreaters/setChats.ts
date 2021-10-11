import Chat from "../../pages/chat"

const setChats = (chats: Array<Chat>) => {
    return {
        type: 'chats/SET',
        payload: chats
    }
}

export default setChats