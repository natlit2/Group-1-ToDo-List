
let addButton = documant.getElementById('button-addon2');
let toDoItemFlex = document.getElementById('p-2');
let addNewListField= document.getElementsByClassName('form-control');


//add event handler with a function that passes the text in addToDoField  as the value of toDOItem


//insert the text with .innerHTML




let newToDoList = function(){
    addNewListField.innerHTML = 'toDoItemFlex';
}
addButton.addEventListener('click', newToDoList);

document.createElement('form-control');

