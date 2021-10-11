import Store from "../utils/Store"
import chatSettingsReducer from "./reducers/chatSettingsReducer"
import chatsReducer from "./reducers/chatsReducer"
import currentChatReducer from "./reducers/currentChatReducer"

const createStore = () => {
    Store
    .addReducer('chatSettings', chatSettingsReducer)
    .addReducer('chats', chatsReducer)
    .addReducer('currentChat', currentChatReducer)
}

export default createStore