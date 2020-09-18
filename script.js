
var btnAdd = document.getElementById('add-item');
var list = document.getElementById('todo-list');
var inputBox = document.getElementById('todo-input');
var currentInputValue = "";

inputBox.addEventListener('input',function(e){
    currentInputValue = e.target.value;
});
btnAdd.addEventListener('click',function(){
    var newListElement = document.createElement('li');
    if(currentInputValue !== ""){
    var textNode = document.createTextNode(currentInputValue);  
    newListElement.appendChild(textNode);
    list.appendChild(newListElement);
    }
    else{
        alert("Empty!!");
    }
    
    
    

});
