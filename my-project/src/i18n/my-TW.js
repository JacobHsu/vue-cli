export const tw = key => {
    return key ? mapper[key.toString()] || key : ''
}

const mapper = {
    "hello": "你好 filters的你好",
    "app-name": "應用程式",
}