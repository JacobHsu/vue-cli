let baseUrl = '';

const env = ~.env
if (env.NODE_ENV == 'development') {
    baseUrl = `http://192.168.1.1`; // 開發環境地址
} else if (env.NODE_ENV == 'production') {
    baseUrl = `http://192.168.1.2`; //生產環境地址
} else if (env.NODE_ENV == 'test') {
    baseUrl = `http://192.168.1.3`; //測試環境地址
}

export {
    baseUrl,
    env
}