// regex

const regexEmail = /^[a-zA-Z0-9-_\.]+@[a-zA-Z0-9-_\.]+\.[a-zA-Z0-9-_\.]{2,10}$/;
const regexPassword = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])([^\s]){6,32}$/;

function loginSubmit(event) {
    event.preventDefault();

    const form = event.target;

    const emailInput = form["email"];
    const passwordInput = form["password"];

    const isValidEmail = validateInput(emailInput, validationEmail);
    const isValidPassword = validateInput(passwordInput, validationPassword);

    if(!isValidEmail || !isValidPassword) {
        return;
    }

    alert("Успішний вхід");
}

function validateInput(input, validation) {    
    const error = document.getElementById(`${input.id}Error`); // отримуємо елемент small з id emailError або passwordError
    const btn = document.getElementById("btnSubmit");

    const validResult = validation(input.value);

    if(validResult.isSuccess) {
        error.innerText = "";
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
        btn.disabled = false;
    } else {
        error.innerText = validResult.error;
        input.classList.add("is-invalid");
        input.classList.remove("is-valid");
        btn.disabled = true;
    }

    return validResult.isSuccess;
}

// oninput
// email
function handleEmailInput(event) {
    const input = event.target;
    validateInput(input, validationEmail);
}

function validationEmail(email) {
    const res = {
        isSuccess: true
    }

    if (email.length == 0) {
        res.isSuccess = false;
        res.error = "Обов'язкове поле";
    } else if (!regexEmail.test(email)) {
        res.isSuccess = false;
        res.error = "Невірний формат пошти";
    }

    return res;
}

// password
function handlePasswordInput(event) {
    const input = event.target;
    validateInput(input, validationPassword);
}

function validationPassword(password) {
    const res = {
        isSuccess: true
    }

    if (password.length < 6) {
        res.isSuccess = false;
        res.error = "Пароль повинен містити мінімум 6 символів";
    } else if (!regexPassword.test(password)) {
        res.isSuccess = false;
        res.error =
            "Пароль повинен містити цифру, велику та маленьку літери";
    }

    return res;
}