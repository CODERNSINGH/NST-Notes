console.log('hello')


setTimeout(() => {
    console.log('world')
}, 0);

setImmediate(() => {
    console.log('bye1')
})

console.log('bye2')


