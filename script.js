var sname = document.getElementById("name")
var email = document.getElementById("email")
var password = document.getElementById("password")
var bio = document.getElementById ("bio")

var nameError = document.getElementById("nameError")
var emailError = document.getElementById("emailError")
var passwordError = document.getElementById("passwordError")
var bioError = document.getElementById("bioError")
var bioCount = document.getElementById("bioCount")

var nameValid = false;
var emailValid = false;
var passwordValid = false;
var bioValid = false;

/* NAME VALIDATION */
sname.addEventListener("input",function(){
    if(sname.value.trim() === ""){
        nameError.innerText = "Name is required"
        nameValid = false;
    }
    else{
        nameError.innerText = ""
        nameValid = true
    }
    check()
})

/* EMAIL VALIDATION */
email.addEventListener("input",function(){
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(email.value.trim() === ""){
        emailError.innerText = "Email is required";
        emailValid = false
    }
    else if(!emailPattern.test(email.value.trim())){
        emailError.innerText = "Enter a valid Email"
        emailValid = false
    }
    else{
        emailError.innerText = ""
        emailValid = true
    }
    check()
})

/* PASSWORD VALIDATION */
password.addEventListener("input",function(){
    if(password.value.length === 0){
        passwordError.innerText = "Password is required"
        passwordValid = false
    }
    else if(password.value.length < 6){
        passwordError.innerText = "Password must contain atleast 6 characters"
        passwordValid = false;
    }
    else{
        passwordError.innerText = ""
        passwordValid = true
    }
    check()
})

/* BIO VALIDATION */
bio.addEventListener("input",function(){
    var length = bio.value.length
    bioCount.innerText = length +" /200 characters"

    if(length == 0){
        bioValid = false
    }
    else if(length <= 200){
        bioValid = true;
    }
    else{
        bioValid = false;
    } 
    check()
})

/* FOR BUTTON */
var btn = document.getElementById("btn")

function check(){
    if(nameValid && emailValid && passwordValid && bioValid){
        btn.disabled = false;
    }
    else{
        btn.disabled = true;
    }
}

var form = document.getElementById("form")
var successMessage = document.getElementById("successMessage")

form.addEventListener("submit", function(event){
    event.preventDefault()

    successMessage.innerText = "Registration Successful!!"
    bioCount.innerText = "0/200 characters"
    form.reset()
})
