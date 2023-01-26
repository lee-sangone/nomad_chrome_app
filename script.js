const loginInput = document.querySelector(".idInput")
const loginForm = document.querySelector("#login-form")
const greeting = document.querySelector("#greeting")
const HIDDEN_CLASSNAME = "hidden"

function loginBtnClick(event) {
    event.preventDefault()
    loginForm.classList.add("hidden")
    const username = loginInput.value
    greeting.innerText = `Hello ${username}`
    greeting.classList.remove(HIDDEN_CLASSNAME)
}



loginForm.addEventListener("submit", loginBtnClick)


