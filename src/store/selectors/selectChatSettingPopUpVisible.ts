import Indexed from '../../types/Indexed';

const selectChatSettingPopUpVisible = (state: Indexed) => state.popUp.chatSetting as boolean;

export default selectChatSettingPopUpVisible;
