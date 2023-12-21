const form = document.querySelector('#form');
const Username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const cpassword = document.querySelector('#cpassword');
let success = true

form.addEventListener('submit',(e)=>{

   if(!validateInputs()){
    e.preventDefault();
   }

})
function validateInputs(){
    const usernameVal = Username.value.trim();
    const emailVal = email.value.trim();
    const passwordVal =password.value.trim();
    const cpasswordVal =cpassword.value.trim();
   if(usernameVal===''){
    success = false;
    setError(username, 'Username is Required')
   }
   else{
   setSuccess(username)
}
if(emailVal===''){
    success = false;
    setError(email,'Email is Required')

}
else if(!validateEmail(emailVal)){
success = false;
setError(email,'Please enter a valid email')
}
else{
    setSuccess(email)
}
    
if(passwordVal === ''){
        success= false;
        setError(password,'Password is required')
    }
    else if(passwordVal.length<8){
        success = false;
        setError(password,'Password must be atleast 8 characters long')
    }
    else{
        setSuccess(password)
    }

    if(cpasswordVal === ''){
        success = false;
        setError(cpassword,'Confirm password is required')
    }
    else if(cpasswordVal!==passwordVal){
        success = false;
        setError(cpassword,'Password does not match')
    }
    else{
        setSuccess(cpassword)
    }

    return success;

}

   
function setError(element,message){
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error')
    errorElement.innerText = message;
    inputGroup.classList.add('error')
    inputGroup.classList.remove('success')
}
function setSuccess(element){
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error')
    errorElement.innerText = '';
    inputGroup.classList.add('success')
    inputGroup.classList.remove('error')
}
const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };


  function validateLogin() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    
    if (username.trim() === '' || password.trim() === '') {
        alert('Please fill in all fields');
    } else {
       
        alert('Login successful!');
        
        
        window.location.href = 'todo.html';
    }
}
function signUp() {
    window.location.href = 'formvalid.html';
}

function validateInput(value, validationBoxId, minLength) {
    var validationBox = document.getElementById(validationBoxId);
    if (value.trim() === '') {
        validationBox.innerHTML = '';
    } else if (value.length >= minLength) {
        
        validationBox.innerHTML = '&#10004;'; 
    } else {
        validationBox.innerHTML = ''; 
    }
}


function addTask() {
    var taskInput = document.getElementById('taskInput');
    var taskList = document.getElementById('taskList');

    var taskText = taskInput.value.trim();

    if (taskText !== '') {
        
        var li = document.createElement('li');
        li.innerHTML = taskText +
            '<span class="edit-icon" onclick="editTask(this)">✎</span>' +
            '<span class="delete-icon" onclick="deleteTask(this)">✖</span>';

       
        taskList.appendChild(li);

       
        taskInput.value = '';
    }
}

function editTask(spanElement) {
    var li = spanElement.parentElement;
    var taskText = li.firstChild.textContent;

    
    li.innerHTML = '<input type="text" class="edit-input" value="' + taskText + '">' +
        '<span class="save-icon" onclick="saveTask(this)" style="cursor: pointer;">Save</span>' +
        '<span class="delete-icon" onclick="deleteTask(this)">✖</span>';
}

function saveTask(spanElement) {
    var li = spanElement.parentElement;
    var taskInput = li.firstChild;
    var editedText = taskInput.value;

    
    li.innerHTML = editedText +
        '<span class="edit-icon" onclick="editTask(this)">✎</span>' +
        '<span class="delete-icon" onclick="deleteTask(this)">✖</span>';
}

function deleteTask(spanElement) {
    var li = spanElement.parentElement;
    li.remove();
}
function logout() {
    window.location.href = 'login.html';
}


