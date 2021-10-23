import Indexed from '../../types/Indexed';

const selectCreateChatPopUpVisible = (state: Indexed) => state.popUp.chatName as boolean;

export default selectCreateChatPopUpVisible;
