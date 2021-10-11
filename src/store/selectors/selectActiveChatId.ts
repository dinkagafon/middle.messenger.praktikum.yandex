const selectActiveChatId = (state: Indexed ) => {
    return state.currentChat.activeChatId as number
}

export default selectActiveChatId