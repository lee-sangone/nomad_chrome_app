const loginForm = document.querySelector("#login-form")
const loginInput = loginForm.querySelector("input")
const loginButton = document.querySelector("#login-form .loginbtn")
console.log(loginInput)
function loginBtnClick () {
    const username = loginInput.value
    if (username === "") {
        alert("Please write your name")
    } else if (username.length > 15) {
        alert("Your name is too long")
    }
        
}

loginButton.addEventListener("click", loginBtnClick)