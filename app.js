const btnEl = document.querySelector('.btn');
const inputEl = document.querySelector('.input');
const copyEl = document.querySelector('.fa-copy');
const alertContainerEl = document.querySelector('.alert-container');

copyEl.addEventListener("click", () => {
    copyPassword();
    alertContainerEl.classList.remove("active");
    console.log(45)
})

btnEl.addEventListener("click", () => {
    createPassword();
})

function createPassword(){
    // define characters to use in the password
    const chars = "0123456789abcdefghijklmnopqrstuvwxyz@#$%^&*()_=?{}[]ABCDEFGHIJKLMNOPQRSTUV";
    // password length
    const passwordLength = 14;
    let password ="";
    for (let index = 0; index < passwordLength; index++) {
        const randomNum = Math.floor(Math.random() * chars.length)
        password += chars.substring(randomNum, randomNum + 1);
    }

    inputEl.value = password;
    alertContainerEl.innerText = password +" copied!"
}

function copyPassword(){
    inputEl.select();
    inputEl.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(inputEl.value);
}





