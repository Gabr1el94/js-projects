 const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const pass = document.getElementById("pass");
const conPass = document.getElementById("conPass");

form.addEventListener('submit',(e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    const usernameValue = username.value.trim() != '' &&
                          username.value.trim() != undefined &&
                          username.value.trim() != null
                          ? username.value : '';

    const emailValue = email.value.trim() != '' &&
                       email.value.trim() != undefined &&
                       email.value.trim() != null
                       ? email.value : '';

    const passValue = pass.value.trim() != '' &&
                    pass.value.trim() != undefined &&
                    pass.value.trim() != null
                    ? pass.value : '';
                    
    const conPassValue = conPass.value.trim() != '' &&
                        conPass.value.trim() != undefined &&
                        conPass.value.trim() != null
                        ? conPass.value : '';
                        
    if (usernameValue === '') {
        setErrorFor(username, 'Username is required');
    }else{
        setSuccessFor(username);
    }

    if(emailValue === ''){
        setErrorFor(emailValue, 'Email is required');
    }else if(!isEmail(emailValue)){
        setErrorFor(emailValue,'Email is not valid');
    }else{
        setSuccessFor(emailValue);
    }

    if (passValue === '') {
        setErrorFor(passValue, 'Password is required');
    } else {
        setSuccessFor(passValue);
    }

    if (conPassValue === '') {   
        setErrorFor(conPassValue, 'Confirm Password is required');
    }else if(passValue !== conPassValue){
        setErrorFor(conPassValue, 'Passwords does not match!');
    }else{
        setSuccessFor(conPassValue);
    }
}

function setErrorFor(input,message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    small.innerText = message;
    formControl.className ='form-control error'
}

function setSuccessFor(username){
    const formControl = input.parentElement;

    formControl.className ='form-control success'
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}