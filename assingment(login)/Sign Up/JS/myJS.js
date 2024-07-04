var signUpName = document.getElementById('signName');
var signUpEmail = document.getElementById('signEmail');
var signUpPass = document.getElementById('signPassword');
var user = [];


if(localStorage.getItem('user') != null){
    user = JSON.parse(localStorage.getItem('user'))
}else{
    user=[]
}


var addNewAccount = document.getElementById('signUpBtn');
addNewAccount.addEventListener('click' , add);

function add(){
    if(signUpName.value == ''|| signUpEmail.value == '' || signUpPass.value == ''){
        document.getElementById('message').innerHTML = `<p class = 'text-center'>All inputs is required</p>`;

    }else{
        var data = {
            name: signUpName.value,
            email: signUpEmail.value,
            password: signUpPass.value
        }
        user.push(data);
        location.href = '../../Login/index.html'
        localStorage.setItem('user', JSON.stringify(user));
        clearData();
    }


}

function clearData(){
    signUpName.value = null; 
    signUpEmail.value = null;
    signUpPass.value = null;
}

// function validateAllInputs(){
//     var regex = {
//         email: 
//     }
// }