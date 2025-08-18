function info(message) {
    return [new Date(), info, message]
}
function warn(message) {
    return [new Date(), warn, message]
}
function error(message) {
    return [new Date(), error, message]
    
}

module.exports = {info,warn,error}

// npm init
// npm login