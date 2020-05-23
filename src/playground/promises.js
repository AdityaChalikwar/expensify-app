const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('This is my resolved data')
    }, 1500)
})

promise.then((data) => {
    console.log(data)
})

// database.ref('expenses').once('value').then((snapshot) => {
//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         })
//     })
//     console.log(expenses)
// })

// database.ref('expenses').on('value', (snapshot) => {
//     console.log(snapshot.val())
// })

// database.ref('name').once('value').then((snapshot) => {
//     console.log(snapshot.val())
// }).catch((e) => {
//     console.log('error', e)
// })

// database.ref().set({
//     name: 'Aditya Chalikwar',
//     age: 22,
//     stressLevel: 6,
//     job: {
//         title: 'Front-end Devoloper',
//         company: 'Google'
//     },
//     location: {
//         city: 'Pune',
//         country: 'India'
//     }
// }).then(() => {
//     console.log('Date Saved')
// }).catch((e) => {
//     console.log('error', e)
// })

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Hyderabad'
// })