function makeid(length) {
    let Length = length || 5
    let result           = ''
    let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    let charactersLength = characters.length
    for ( var i = 0; i < Length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength))
    }
    return result;
}

export default makeid