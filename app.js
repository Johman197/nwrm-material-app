const form = document.getElementsByClassName('sign-up-form')
const firstName = document.getElementById('fName');
const lastName = document.getElementById('lName');
const email = document.getElementById('fName');
const password = document.getElementById('fName');
const myForm = document.getElementById('my-div');

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});


function checkInputs() {
	// trim to remove the whitespaces
	const firstNameValue = username.value.trim();
	const lastNameValue = email.value.trim();
	const passwordValue = password.value.trim();
	
	if(firstNameValue === '') {
		setErrorFor(firstName);
	}
}

    function setErrorFor(input) {
        const formControl = input.parentElement;
        formControl.className = 'border-accent border-accent-red';
    }

    // function checkInputs(){
//     const firstNameValue = firstName.value.trim();
//     const lastNameValue = lastName.value.trim();
//     const emailValue = email.value.trim();
//     const passwordValue = password.value.trim();

//     if(lastNameValue === ''){
//         setErrorFor(firstName);
//     }
// }

// function setErrorFor(input){
//     const formControl = input.parentElement;

//     formControl.className = 'border-accent border-accent-red';
//}