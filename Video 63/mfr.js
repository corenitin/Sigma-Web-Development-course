let array =[2,3,44,5,56,7,8,9]
// let newarray =[]
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     newarray.push(element**3)
// }

// console.log(newarray)

const red = (a,b)=>{
    return a+b
}
console.log(array.reduce(red))

console.log(Array.from('nitin'))