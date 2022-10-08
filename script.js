const form = document.getElementById('form')
const firstName = document.getElementById('first-name')
const lastName = document.getElementById('last-name')
const email = document.getElementById('email')
const password = document.getElementById('password')

form.addEventListener('submit', (e) => {
    e.preventDefault();


    validation();
});

function validation()
{
    const firstValue = firstName.value.trim();
    const lastValue = lastName.value.trim();
    const emailValue = email.value.trim();
    const passValue = password.value.trim();

    let emailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let passwordFormat = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    
    if(firstValue === ''){

        errorOccured(firstName, 'First name cannot be empty')

    }else {

        validOccurence(firstName);

    }

    if(lastValue === ''){

        errorOccured(lastName, 'Last name cannot be empty')

    }else {

        validOccurence(lastName);

    }

    if(emailValue.match(emailformat)){

        validOccurence(email)

    }else if(emailValue === '') {

        errorOccured(email, 'Email cannot be empty');

    }
    
    else {

        errorOccured(email, 'The email you used is not a valid');

    }


   
    if(passValue.match(passwordFormat)){

        validOccurence(password)

    }else if(passValue === '') {

        errorOccured(password, 'Password cannot be empty');

    }
    else {

        errorOccured(password, 'Invalid Password');
        console.log('Note: Password must be between 6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter :)')

    }

}

function errorOccured(input, message){
    const formArea = input.parentElement;
    const small = formArea.querySelector('small')

    small.innerText = message

    formArea.className = 'error'
}

function validOccurence(input)
{
    const formArea = input.parentElement;
    formArea.className = 'valid'
}