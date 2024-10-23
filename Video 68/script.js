console.log('Nitin')

// let bhopu = document.getElementsByClassName('box')
// console.log(bhopu)
// bhopu[2].style.backgroundColor = 'red'

// document.getElementById('box').style.backgroundColor = 'yellow'
// document.getElementById('purple').style.backgroundColor = 'purple'

// document.querySelector('.box').style.backgroundColor = 'green'
console.log(document.querySelectorAll('.box'))
document.querySelectorAll('.box').forEach(e => {
    e.style.backgroundColor = 'green'
})