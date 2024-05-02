export type textMessage = {
    source: 'user' | 'bot'
    content: string
}

export type listMessage = {
    name: string,
    tags: string[],
    profileTags: string[]
}

export type dishesList = {
    goodDishes: listMessage[],
    badDishes: listMessage[]
}

export const isTextMessage = (message: textMessage | dishesList): message is textMessage => {
    return message.hasOwnProperty('source')
}
