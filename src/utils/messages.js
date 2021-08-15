const generateMessage = (username, text) => {
    return {
        username,
        text,
        createdeAt : new Date().getTime() 
    }
}

const generateLocationMessage = (username, url) => {
    return {
        username, 
        url,
        createdeAt : new Date().getTime() 
    }
}


module.exports = {
    generateMessage,
    generateLocationMessage
}