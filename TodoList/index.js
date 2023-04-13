let inputField = document.querySelector('input');
let reset = document.querySelector('button');
const todoContainer = document.querySelector('.TodoContainer');
const mainContainer = document.querySelector('.container');

inputField.addEventListener('keyup', (event) => {

    if(event.key == "Enter"){

        if(inputField.value == ""){
            alert("Please type something")
        }
        else{
            let list = document.createElement('li');
            list.innerHTML = inputField.value;
            todoContainer.appendChild(list);
            inputField.value = "";  
        
        
        list.addEventListener('click', () => {
            list.style.textDecoration = 'line-through';
            list.style.transition = "2s";
        })

        list.addEventListener('dblclick', () => {
            todoContainer.removeChild(list);
        })

        reset.addEventListener('click', () => {
            todoContainer.removeChild(list);
        })
        } 
        
      
    };
})



