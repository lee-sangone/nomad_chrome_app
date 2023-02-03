const toDoForm = document.querySelector("#todo-form")
const toDoInput = toDoForm.querySelector("input")
const toDoList = document.querySelector("#todo-list")
const todos_key = "todos"
let toDos = []

function deleteToDo (event) {
    const li = event.target.parentElement
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id))
    li.remove()
    saveToDos()
}

function saveToDos () {
    localStorage.setItem(todos_key, JSON.stringify(toDos))
}

function paintToDo(newToDo) {
    const li = document.createElement("li")
    li.id = newToDo.id
    const span = document.createElement("span")
    const button = document.createElement("button")
    button.innerText = "X"
    button.addEventListener("click", deleteToDo)
    li.appendChild(span)
    li.appendChild(button)
    span.innerText = newToDo.text
    toDoList.appendChild(li)
}

function handleToDoSubmit (event) {
    event.preventDefault()
    const newToDo = toDoInput.value
    toDoInput.value = ""
    const newToDoObj = {
        text : newToDo,
        id: Date.now()
    }
    toDos.push(newToDoObj)
    paintToDo(newToDoObj)
    saveToDos()
}

toDoForm.addEventListener("submit", handleToDoSubmit)



const savedToDos = localStorage.getItem(todos_key)

if(savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos)
    toDos = parsedToDos
    parsedToDos.forEach(paintToDo)        
}

