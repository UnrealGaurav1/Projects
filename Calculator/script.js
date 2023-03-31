let string = ""
const buttons = document.getElementsByClassName("button");
const clear = document.getElementById('clear');
const evaluate = document.getElementById('evaluate');
const inputfield = document.getElementById('inputfield');
const inputText = document.getElementById('inputfield').value;

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e)=>{
        string = string + e.target.innerHTML;
        document.querySelector('input').value = string;
    })
})

clear.addEventListener('click', () => {
    document.getElementById('inputfield').value = "";
    string = "";
})

evaluate.addEventListener('click', () => {
    string = eval(string);
    document.querySelector('input').value = string;
})


