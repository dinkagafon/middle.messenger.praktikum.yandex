import Reducer from "../../utils/Reducer";

const chatSettingsReducer: Reducer<{ active: boolean }> = (state = {active: false}, action) => {
    switch (action.type) {
        case 'chatSettings/SETACTIVE':
            return {active: true}
        case 'chatSettings/SETDISABLE':
            return {active: false}
        default:
            return state
    }
}

export default chatSettingsReducer