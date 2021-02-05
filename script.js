
var btnAdd = document.getElementById('add-item');
var list = document.getElementById('todo-list');
var inputBox = document.getElementById('todo-input');
var currentInputValue = "";

function doSomething() {
    return false;
}

inputBox.addEventListener('input',function(e){
    currentInputValue = e.target.value;
    console.log("inside inputbox event listener");
    //  if(e.keyCode===13){
    //      console.log("inside enter key press")
    //      e.preventDefault();
    //      addItem();
    //  }
    
});
btnAdd.addEventListener("click",function(){
  
    var newListElement = document.createElement('li');
    if(currentInputValue !== ""){
    
    var textNode = document.createTextNode(currentInputValue);  
    newListElement.appendChild(textNode);
    list.appendChild(newListElement);
    }
    else{
        alert("Empty!!");
    }
    return false;
    


});
