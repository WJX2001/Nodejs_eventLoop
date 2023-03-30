setTimeout(() => {
    console.log('setTimeout')
},0)


Promise.resolve().then(() => {
    console.log('promise')
    Promise.resolve().then(()=> {
        console.log('promise2')
    })
})

console.log('main')

// main promise promise2 setTimeout 
// 微任务之间的嵌套也会在同一次事件循环中执行