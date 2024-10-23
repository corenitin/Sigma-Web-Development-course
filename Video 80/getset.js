class User {
    constructor(name) {
        //invokes the shetter
        this.name = name;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        if (value.length < 4) {
            console.log("Name is too short.");
            return;
        }
        this._name = value;
    }
}

let user = new User("nitin");
console.log(user.name); //nitin

user = new User(""); //Name is too short.