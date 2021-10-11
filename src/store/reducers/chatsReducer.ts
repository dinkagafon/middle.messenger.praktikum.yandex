import Chat from "../../types/Chat";
import Reducer from "../../utils/Reducer";

const chatsReducer: Reducer<Array<Chat>> = (state = [], action) => {
    switch (action.type) {
        case 'chats/SET':
            return action.payload
        default:
            return state
    }
}

export default chatsReducer