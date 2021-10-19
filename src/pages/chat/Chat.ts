import ChatsList from '../../components/ChatsList';
import Block from '../../utils/Block';
import chat from './chat.pug';
import ChatWindow from '../../components/ChatWindow';
import PopUp from '../../components/PopUp';
import Store from '../../utils/Store';
import setChatNamePopUpDisable from '../../store/actrionCreaters/setChatNamePopUpDisable';
import CreateChat from '../../components/CreateChat';
import selectCreateChatPopUpVisible from '../../store/selectors/selectCreateChatPopUpVisible';
import setChatSettingsPopUpDisable from '../../store/actrionCreaters/setChatSettingsPopUpDisable';
import selectChatSettingPopUpVisible from '../../store/selectors/selectChatSettingPopUpVisible';
import ChatSettings from '../../components/ChatSettings';
import memoize from '../../utils/memoize';
import AuthService from '../../services/AuthService';
import ChatsService from '../../services/ChatsService';

export default class Chat extends Block {
  constructor() {
    super('div', {}, {
      chatList: new ChatsList(),
      chatWindow: new ChatWindow(),
      chatNamePopUp: new PopUp({
        disableFunc: () => {
          Store.dispatch(setChatNamePopUpDisable());
        },
        content: new CreateChat(),
        active: true,
      }),
      chatSettingsPopUp: new PopUp({
        disableFunc: () => {
          Store.dispatch(setChatSettingsPopUpDisable());
        },
        content: new ChatSettings(),
        active: true,
      }),
    });
  }

  setClass() {
    const baseClass = 'chat';
    this.attrs.class = baseClass;
  }

  componentDidMount() {
    AuthService.getProfile();
    ChatsService.init();
    const memoizeCreateChat = memoize(
      (state) => selectCreateChatPopUpVisible(state),
      (data) => {
        this.props.chatNamePopUp.setProps({
          active: data,
        });
      },
    );
    const memoizeChatSetting = memoize(
      (state) => selectChatSettingPopUpVisible(state),
      (data) => {
        this.props.chatSettingsPopUp.setProps({
          active: data,
        });
      },
    );
    Store.subscribe((state) => {
      memoizeCreateChat(state);
      memoizeChatSetting(state);
    });
  }

  render() {
    this.setClass();
    return chat({
      chatList: this.props.chatList,
      chatWindow: this.props.chatWindow,
      chatNamePopUp: this.props.chatNamePopUp,
      chatSettingsPopUp: this.props.chatSettingsPopUp,
    });
  }
}
