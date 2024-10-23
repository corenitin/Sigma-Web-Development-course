let a = [2, 33, 4, 5, 6, 777]

// for (let index = 0; index < a.length; index++) {
//     const element = a[index];
//     console.log(element)
// }

// a.forEach((value, index, a) => {
//     console.log(value, index, a)
// });

let object = {
    K: 'Nitin',
    N: 'Krinal'
}
for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
        const element = object[key];
        console.log(key, element)
    }
}