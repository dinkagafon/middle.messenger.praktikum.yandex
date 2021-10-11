import Chat from "../../types/Chat"

const selectChats = (state: Indexed ) => {
    return state.chats as Array<Chat>
}

export default selectChats