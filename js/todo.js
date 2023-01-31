const toDoForm = document.querySelector("#todo-form")
const toDoInput = toDoForm.querySelector("input")
const toDoList = document.querySelector("#todo-list")

const toDos = []

function deleteToDo (event) {
    const li = event.target.parentElement
    li.remove()
}

function saveToDos () {
    localStorage.setItem("todos", JSON.stringify(toDos))
}

function paintToDo(newToDo) {
    const li = document.createElement("li")
    const span = document.createElement("span")
    const button = document.createElement("button")
    button.innerText = "X"
    button.addEventListener("click", deleteToDo)
    li.appendChild(span)
    li.appendChild(button)
    span.innerText = newToDo
    toDoList.appendChild(li)
}

function handleToDoSubmit (event) {
    event.preventDefault()
    const newToDo = toDoInput.value
    toDoInput.value = ""
    toDos.push(newToDo)
    paintToDo(newToDo)
    saveToDos()
}

toDoForm.addEventListener("submit", handleToDoSubmit)