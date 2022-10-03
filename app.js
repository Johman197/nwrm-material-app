const firstName = document.getElementById('fName');
const lastName = document.getElementById('lName');
const email = document.getElementById('fName');
const password = document.getElementById('fName');
const form = document.getElementsByTagName('div');

document.addEventListener('submit', e =>{
    e.preventDefault();

    checkInputs();
});

function checkInputs(){
    const firstNameValue = firstName.value.trim();
    const lastName = lastName.value.trim();
    const email = email.value.trim();
    const password = password.value.trim();

    if(firstNameValue === ''){
        firstName.parentElement.classList.remove("border-accent");
    }
}