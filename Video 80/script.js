// let obj ={
//     a:1,
//     b:"nitin"
// }
// console.log(obj);

// let animal = {
//     eats:true
// };
// let rabbit ={
//     jumps:true
// };
// rabbit.__proto__ = animal; //here animal is prototype of rabbit

class Animal {
    constructor(name) {
        this.name = name;
        console.log("object is created..");
    }
    eats() {
        console.log("kha rha hoon");
    }
    jumps() {
        console.log("kud rha hoon");

    }
}

class lion extends Animal {
    constructor(name) {
        super(name)
        console.log("the lion is roaring..");
    }
    eats() {
        console.log("kha rha hoon roar") //here method overiding is happening
    }
}


let a = new Animal("KUku");
console.log(a);


let l = new lion("sher")
console.log(l);
