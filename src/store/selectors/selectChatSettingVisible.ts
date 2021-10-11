const selectChatSettingVisible = (state: Indexed ) => {
    return state.chatSettings.active as boolean
}

export default selectChatSettingVisible