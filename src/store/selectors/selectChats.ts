import Chat from '../../types/Chat';

const selectChats = (state: Indexed) => state.chats as Array<Chat>;

export default selectChats;
