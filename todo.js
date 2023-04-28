const todoInput = document.getElementById("todoInput");
const todoUl = document.getElementById("todoUl");
function addTask(){
    if(todoInput.value === ""){
        alert("you must write something !");
    }else{
        let li = document.createElement("li");
        li.innerHTML = todoInput.value;
        todoUl.appendChild(li);
        
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        span.className = "close";
        li.appendChild(span);
    }
    todoInput.value = "";
    saveData();
}


todoUl.addEventListener('click', function removeLi(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }

})

function saveData(){
    localStorage.setItem("data", todoUl.innerHTML);
}

function showTask(){
    todoUl.innerHTML = localStorage.getItem("data");
}
showTask();