var signUpName = document.getElementById('signName');
var signUpEmail = document.getElementById('signEmail');
var signUpPass = document.getElementById('signPassword');
var user = [];
var loginBtn = document.getElementById('loginBtn');



if(localStorage.getItem('user') != null){
    user = JSON.parse(localStorage.getItem('user'))
}else{
    user=[]
}


var signUpBtn = document.getElementById('signUpBtn');
signUpBtn.addEventListener('click',add);

function add(){
        userValidationInputs();
        isExit();

        if(userValidationInputs() == true ){
            var data = {
                name: signUpName.value,
                email: signUpEmail.value,
                password: signUpPass.value
            };
            user.push(data);
            // location.href = '/login.html'
            localStorage.setItem('user', JSON.stringify(user));
            var confirmMsg = document.getElementById('confirmMsg')
            confirmMsg.classList.replace("d-none" , "d-block")
        }else{
            var tryAgain = document.getElementById('tryAgain')
            tryAgain.classList.replace("d-none","d-block");
        }
        
}
function userNameValidation(){
    var userNameAlert= document.getElementById('userNameAlert')
    var nameRegex = /^[A-Z][a-z]{3,10}(\s?[A-Z][a-z]{3,10})?$/

    if(nameRegex.test(signUpName.value) == true && signUpName.value != "" ){
        signUpName.classList.add("is-valid");
        signUpName.classList.remove("is-invalid");
        userNameAlert.classList.replace("d-block","d-none");
        return true ;
    }else {
        signUpName.classList.remove("is-valid");
        signUpName.classList.add("is-invalid");
        userNameAlert.classList.replace("d-none","d-block");
        return false
    }

}
function userPassValidation(){
    var userPassAlert = document.getElementById('userPassAlert');
    var passRegex =/^.{5,15}$/

    if(passRegex.test(signUpPass.value) == true && signUpPass.value != ""){
        signUpPass.classList.add("is-valid");
        signUpPass.classList.remove("is-invalid");
        userPassAlert.classList.replace("d-block","d-none");
        return true
    }else {
        signUpPass.classList.remove("is-valid");
        signUpPass.classList.add("is-invalid");
        userPassAlert.classList.replace("d-none","d-block");
        return false
    }
}
function userEmailValidation(){
    var userEmailAlert = document.getElementById('userEmailAlert');
    var emailRegex =/@[a-z]{5,10}(|.com)$/;

    if(emailRegex.test(signUpEmail.value) == true && signUpEmail.value != ""){
        signUpEmail.classList.add("is-valid");
        signUpEmail.classList.remove("is-invalid");
        userEmailAlert.classList.replace("d-block","d-none");
        return true
    }else {
        signUpEmail.classList.remove("is-valid");
        signUpEmail.classList.add("is-invalid");
        userEmailAlert.classList.replace("d-none","d-block");
        return false
    }
}
function userValidationInputs(){
    userNameValidation();
    userPassValidation();
    userEmailValidation();
    if(userNameValidation()== true && userEmailValidation()==true && userPassValidation()==true){
        return true
    } else{
        return false
    }

}
function isExit(){
    var accExist = document.getElementById('accExist');

    for(var i=0 ; i<user.length;i++){
        if(user[i].name.toLowerCase() == signUpName.value.toLowerCase() || user[i].email.toLowerCase() == signUpEmail.value.toLowerCase()){
            signUpName.classList.remove("is-valid");
            signUpEmail.classList.remove("is-valid");
            accExist.classList.replace("d-none","d-block");
            return true;
        }else{
            return false;
        }
    }
}

var userName = localStorage.getItem("sessionUserName")

// login
loginBtn.addEventListener('click', login)
function login(){
    var loginEmail = document.getElementById('loginEmail');
    var loginPassword = document.getElementById('loginPassword');
    
    var wrongMsg = document.getElementById('wrongMsg');

    if(loginEmail.value == "" || loginPassword.value == ""){
        var message = document.getElementById('message');
        message.classList.replace("d-none","d-block");
        return false
    }
    for (let i = 0; i < user.length; i++) {
        if(user[i].email.toLowerCase() == loginEmail.value.toLowerCase() && user[i].password.toLowerCase()==loginPassword.value.toLowerCase()){
            localStorage.setItem('sessionUserName',user[i].name)
            location.href = 'home.html'
        }else{
            wrongMsg.classList.replace("d-none","d-block")
        }
        
    }
}

function displayName(){
    document.getElementById('userName').innerHTML = userName ;
}

function logOut(){
    localStorage.removeItem('sessionUserName')
}