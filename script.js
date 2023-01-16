const loginInput = document.querySelector(".idInput")
const loginButton = document.querySelector(".loginbtn")

function loginBtnClick() {
    const username = loginInput.value
    if (username === "") {
        alert("Please write your name")
    } else if (username.length > 15) {
        alert("Your name is too long")
    }
        
}

loginButton.addEventListener("click", loginBtnClick)