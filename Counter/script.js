let count = 0
let increment = document.getElementById('increment')
let decrement = document.getElementById('decrement')
let reset = document.getElementById('reset')


increment.addEventListener('click', () => {
    count += 1;
    document.getElementById('count').innerHTML = count;
})

decrement.addEventListener('click', () => {
    count -= 1;
    document.getElementById('count').innerHTML = count;
})
reset.addEventListener('click', () => {
    count = 0;
    document.getElementById('count').innerHTML = count;
})