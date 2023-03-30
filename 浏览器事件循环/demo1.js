setTimeout(()=> {
    console.log('setTimeout')
},0)

Promise.resolve().then(()=> {
    console.log('promise')
})

console.log('main')   // main promise setTimeout