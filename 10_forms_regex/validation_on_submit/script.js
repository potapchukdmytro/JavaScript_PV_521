// regex

const regexEmail = /^[a-zA-Z0-9-_\.]+@[a-zA-Z0-9-_\.]+\.[a-zA-Z0-9-_\.]{2,10}$/;
const regexPassword = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])([^\s]){6,32}$/;

function loginSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const inputData = {
        email: form["email"].value,
        password: form["password"].value,
    };

    const validationResult = validation(inputData);

    if (validationResult.isSuccess) {
        alert("Ви успішно увійшли");
    } else {
        printErrors(validationResult.errors);
    }
}

function validation(data) {
    clearErrors();
    const res = {
        isSuccess: true,
        errors: {},
    };

    if (data.email.length == 0) {
        res.isSuccess = false;
        res.errors.email = "Обов'язкове поле";
    } else if (!regexEmail.test(data.email)) {
        res.isSuccess = false;
        res.errors.email = "Невірний формат пошти";
    }

    if (data.password.length < 6) {
        res.isSuccess = false;
        res.errors.password = "Пароль повинен містити мінімум 6 символів";
    } else if (!regexPassword.test(data.password)) {
        res.isSuccess = false;
        res.errors.password =
            "Пароль повинен містити цифру, велику та маленьку літери";
    }

    return res;
}

function clearErrors() {
    const emailError = document.getElementById("emailError");
    const emailInput = document.getElementById("email");

    const passwordError = document.getElementById("passwordError");
    const passwordInput = document.getElementById("password");

    emailError.innerText = "";
    emailInput.classList.remove("is-invalid");

    passwordError.innerText = "";
    passwordInput.classList.remove("is-invalid");
}

function printErrors(errors) {
    const emailError = document.getElementById("emailError");
    const emailInput = document.getElementById("email");

    const passwordError = document.getElementById("passwordError");
    const passwordInput = document.getElementById("password");

    if (errors.email) {
        emailError.innerText = errors.email;
        emailInput.classList.add("is-invalid");
    }

    if (errors.password) {
        passwordError.innerText = errors.password;
        passwordInput.classList.add("is-invalid");
    }
}
