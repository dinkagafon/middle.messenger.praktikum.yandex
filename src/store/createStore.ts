import Store from '../utils/Store';
import popUpReducer from './reducers/popUpReducer';
import chatsReducer from './reducers/chatsReducer';
import currentChatReducer from './reducers/currentChatReducer';
import searchUsersReducer from './reducers/searchUsersReducer';
import profileReducer from './reducers/profileReducer';
import errorsReducer from './reducers/errorsReducer';

const createStore = () => {
  Store
    .addReducer('popUp', popUpReducer)
    .addReducer('chats', chatsReducer)
    .addReducer('currentChat', currentChatReducer)
    .addReducer('searchUsers', searchUsersReducer)
    .addReducer('profile', profileReducer)
    .addReducer('errors', errorsReducer);
};

export default createStore;
