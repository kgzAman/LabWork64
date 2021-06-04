function addToList(value) {
    const todo = document.createElement("li")

    todo.innerHTML=value
        todo.addEventListener("dblclick",(e)=> {
            e.stopPropagation();
            e.target.classList.add("line");
        })

    document.getElementById('listEvent').appendChild(todo)

}


document.getElementsByClassName("send")[0].addEventListener("click",(event)=>{
    event.preventDefault();
    const input = document.getElementById("doit");
    if(input.value!==''){
    addToList(input.value)
    input.value="";
    input.focus();
    }
})

