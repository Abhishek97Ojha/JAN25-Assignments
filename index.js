var form = document.querySelector('.form');
var username = document.getElementById('username');
var email = document.getElementById('email');
var age = document.getElementById('age');
var password = document.getElementById('password');
var cnfpassword = document.getElementById('confirm-password');

form.addEventListener('submit', submitForm);

function submitForm(event) {
    event.preventDefault();

    checkUserName(username);
    checkEmail(email);
    checkAge(age);
    checkPassword(password);
    checkCnfPassword(cnfpassword);
}

function checkUserName(element) {
    var name = element.value;
    if (name === "") {
        setError(element, "UserName cannot be empty");
    } else {
        onSuccess(element);
    }
}

function checkEmail(element) {
    var email = element.value;
    if (email === "") {
        setError(element, "Email cannot be empty");
    } else if (!emailval(email)) {
        setError(element, "Email is not valid");
    } else {
        onSuccess(element);
    }
}

function emailval(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function checkAge(element) {
    var age = element.value;
    if (age === "") {
        setError(element, "Age cannot be empty");
    } else if (age < 5 || age > 99) {
        setError(element, "Age between (5-99)")
    } else {
        onSuccess(element);
    }
}

function checkPassword(element) {
    var specialCharacter = ["(", "@", "#"];
    var pass = element.value;
    if (pass === "") {
        setError(element, "Password cannot be empty");
    } else {
        for (var i = 0; i < specialCharacter.length; i++) {
            if (!pass.includes(specialCharacter[i])) {
                setError(element, "Password must contain (,@,#")
            } else {
                onSuccess(element);
            }
        }

    }
}

function checkCnfPassword(element) {
    var pass = password.value;
    var cnfPass = element.value;
    if (cnfPass === "") {
        setError(element, "Confirm Password cannot be empty");
    } else if (pass !== cnfPass) {
        setError(element, "Passwords do not match");
    } else {
        onSuccess(element);
    }
}

function setError(element, errorMessage) {
    var formControl = element.parentElement;
    formControl.className = "form-control failure";
    formControl.querySelector("small").innerText = errorMessage;
}

function onSuccess(element) {
    var formControl = element.parentElement;
    formControl.className = "form-control success";
    formControl.querySelector("small").innerText = "";
}