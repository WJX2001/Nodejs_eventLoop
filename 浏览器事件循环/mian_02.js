setTimeout(()=> {
    Promise.resolve().then(() => {
        console.log('promise')
    })
},0)

Promise.resolve().then(()=> {
    setTimeout(()=> {
        console.log('setTimeout');
    },0)
})

console.log('main')

// main  promise  setTimeout

/** 1.首先将setTimeout放入宏任务队列，将回调函数放入I/O中等待 
 *  2.将promise.resolve()放入宏任务队列，将其回调函数放入微任务队列
 *  3.打印main 此时此轮事件宏任务执行完毕，开始执行微任务
 *  4.微任务队列里是一个setTimeout，所以将它放入I/O中，到此本轮事件结束，进行下一轮事件循环
 *  5.开始执行宏任务，由于队列讲究先进先出，所以也就是一开始setTimeout中的Promise，由于他的回调是微任务，所以将它放入微任务队列
 *  6.继续执行微任务，将刚放入的console.log('promise')打印出来，本轮结束
 *  7.下一轮事件开始，将console.log('setTimeout')打印出来
*/
