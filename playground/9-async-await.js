const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (a < 0 || b < 0) {
                return reject('Numbers must be non-negative')
            }

            resolve(a + b)
        }, 2000)
    })
}


// // add(1, 2).then((sum) => {
// //     console.log(sum)

// //     add(sum, 5).then((sum2) => {
// //         console.log(sum2)
// //     }).catch((e) => {
// //         console.log(e)
// //     })
// // }).catch((e) => {   
// //     console.log(e)
// // })

// add(1, 1).then((sum) => {
//     console.log(sum)
//     return add(sum, 4)
// }).then((sum2) => {
//     console.log(sum2)
// }).catch((e) => {
//     console.log(e)
// })

const doWork = async () => {
    const sum = await add(1, -99)
    const sum2 = await add(sum, 50)
    const sum3 = await add(sum2, -3)
    return sum3
}

doWork().then((result) => {
    console.log('result', result)
}).catch((e) => {
    console.log('e', e)
})