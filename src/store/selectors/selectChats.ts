import Chat from '../../types/Chat';
import Indexed from '../../types/Indexed';

const selectChats = (state: Indexed) => state.chats as Array<Chat>;

export default selectChats;
