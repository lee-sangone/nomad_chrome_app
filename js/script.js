const loginInput = document.querySelector(".idInput")
const loginForm = document.querySelector("#login-form")
const greeting = document.querySelector("#greeting")
const HIDDEN_CLASSNAME = "hidden"
const USERNAME_KEY = "username"

function loginBtnClick(event) {
    event.preventDefault()
    loginForm.classList.add("hidden")
    const username = loginInput.value
    localStorage.setItem("USERNAME_KEY", username)
    paintGreetings(username)
}

function paintGreetings(username) {
    greeting.innerText = `Hello ${username}`
    greeting.classList.remove(HIDDEN_CLASSNAME)
}

loginForm.addEventListener("submit", loginBtnClick)

const savedUsername = localStorage.getItem("USERNAME_KEY")

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME)
    loginForm.addEventListener("submit", loginBtnClick)
} else {
    paintGreetings(savedUsername)
}