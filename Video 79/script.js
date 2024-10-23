let a = prompt("Enter a frist number")
let b = prompt("Enter a second number")
if (isNaN(a) || isNaN(b)) {
    throw SyntaxError("sorry this is not allowed")
}
let sum = parseInt(a) + parseInt(b);

try {
    console.log("The sum is ", sum * x);

} catch (error) {
    console.log("error a gya bro");
    
}