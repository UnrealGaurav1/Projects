let inputField = document.querySelector('input');
const todoContainer = document.querySelector('.TodoContainer');
const mainContainer = document.querySelector('.container');

inputField.addEventListener('keyup', (event) => {
    if(event.key == "Enter"){
        let list = document.createElement('li');
        list.innerHTML = inputField.value;
        todoContainer.appendChild(list);
        list.innerText[0].toUpperCase();
        inputField.value = "";    
        
        

        list.addEventListener('click', () => {
            list.style.textDecoration = 'line-through';
        })

        list.addEventListener('dblclick', () => {
            todoContainer.removeChild(list);
        })
    };
})


