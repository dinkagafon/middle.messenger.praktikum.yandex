const setActiveChatId = (id: number) => {

    return {
        type: 'currentChat/SETACTIVECHATID',
        payload: id
    }
}

export default setActiveChatId