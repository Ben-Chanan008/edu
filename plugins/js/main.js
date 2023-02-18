if (document.querySelector('#index-page')) {

    const container = document.querySelector('.images');
    const left = document.querySelector('.fa-arrow-left');
    const right = document.querySelector('.fa-arrow-right');
    const imagesContainer = document.querySelector('.image-container');
    // const imgCls = document.querySelector('.images')
    // console.log(imagesContainer)
    let activeSlider = 0;
    let slide = false;
    let image = [];

    image[0] = 'ben.jpg';
    image[1] = 'bensla_logo.png';
    image[2] = 'cafer.jpg';
    image[3] = 'head.jpg';
    image[4] = 'daniel.jpg';

    document.slider.src = image[0];
    left.addEventListener('click', () => slide('left'));
    right.addEventListener('click', () => slide('right'));
    slide = function(direction){
        const slidingAnimation = document.slider.src = image[activeSlider];
        if (direction === 'left')
            activeSlider = (activeSlider - 1 > -1) ? activeSlider -= 1 : image.length - 1;
        // image[0].style.transform = 'translateX(-100%)';
        // image[0].style.transition = 'translate';
        if (direction === 'right')
            activeSlider = (activeSlider < image.length - 1) ? activeSlider += 1 : 0;
        document.slider.src = image[activeSlider];
    }
    const second = document.querySelector('.second-nav');
    let tops = 0;

    const stats = document.querySelector('.stats div');
    // stats.clientHeight = 1
    const body = document.querySelector('body');
    const btn = document.querySelector('.btn');
    const spinner = document.querySelector('.spinner');
    // let bool = true;
    btn.addEventListener('click', () => {
        // console.log('clicked')   
        setTimeout(() => {
            window.history.pushState('home', 'home', './register.php');
            location.href = 'register.php';    
        }, 1500);
        spinner.style.display = 'block';
        body.style.overflow = 'hidden';
    });
}

if (document.querySelector('#register-page')) {
    const nameField = document.querySelector('#name');
    const phoneField = document.querySelector('#phone-number');
    const emailField = document.querySelector('#email');
    const passwordField = document.querySelector('#password');
    const form = document.querySelector('#register-form');
    const nameErr = document.querySelector('#nameValid');
    const emailErr = document.querySelector('#emailValid');
    const passErr = document.querySelector('#passwordValid');
    const phoneErr = document.querySelector('#phoneValid');
    const minLength = passwordField.getAttribute('minlength');
    const maxLength = passwordField.getAttribute('maxlength');
    const errors = {
        nameErr: '<div class="text-danger p-1">Name needed please</div>',
        emailErr: '<div class="text-danger p-1">Email needed please</div>',
        passErr: `<div class="text-danger p-1">This field requires minimum of ${minLength} and maximum of ${maxLength}</div>`,
        phoneFirstErr: '<div class="text-danger p-1">Phone number please</div>',
        phoneSecondErr: '<div class="text-danger p-1">Must be numbers</div>',
    }
    // console.log(errors.phoneFirstErr)
    form.addEventListener('submit', (e) => validate(e))
    function validate(e){
        // console.log(e)
        e.preventDefault();
        
        if(nameField.value === '' && emailField.value === '' && phoneField.value === '' && passwordField.value === ''){
            nameErr.innerHTML = `${errors.nameErr}`;
            passErr.innerHTML = `${errors.passErr}`;
            emailErr.innerHTML = `${errors.emailErr}`;
            phoneErr.innerHTML = `${errors.phoneFirstErr}`;
            
        } else if(nameField.value !== '' && emailField.value !== '' && phoneField.value === '' && passwordField.value !== ''){
            phoneErr.innerHTML = `${errors.phoneFirstErr}`
            
        } else if(nameField.value === '' && emailField.value !== '' && phoneField.value !== '' && passwordField.value !== ''){ 
            nameErr.innerHTML = `${errors.nameErr}`
        } else if(nameField.value !== '' && emailField.value === '' && phoneField.value !== '' && passwordField.value !== ''){
            emailErr.innerHTML = `${errors.emailErr}`       
        } else if(nameField.value !== '' && emailField.value !== '' && phoneField.value === '' && passwordField.value !== ''){
            passErr.innerHTML = `${errors.passErr}`
        }
        if(nameField.value === '' && emailField.value === '' && phoneField.value === '' && passwordField.value !== ''){
            nameErr.innerHTML = `${errors.nameErr}`;
            emailErr.innerHTML = `${errors.emailErr}`;
            phoneErr.innerHTML = `${errors.phoneFirstErr}`;
        } else if(nameField.value === '' && emailField.value === '' && phoneField.value !== '' && passwordField.value === ''){
            nameErr.innerHTML = `${errors.nameErr}`;
            emailErr.innerHTML = `${errors.emailErr}`;
            passErr.innerHTML = `${errors.passErr}`;
        } else if(nameField.value !== '' && emailField.value === '' && phoneField.value === '' && passwordField.value === ''){
            phoneErr.innerHTML = `${errors.phoneFirstErr}`;
            emailErr.innerHTML = `${errors.emailErr}`;
            passErr.innerHTML = `${errors.passErr}`;
        } else if(nameField.value === '' && emailField.value !== '' && phoneField.value === '' && passwordField.value === ''){
            phoneErr.innerHTML = `${errors.phoneFirstErr}`;
            nameErr.innerHTML = `${errors.nameErr}`;
            passErr.innerHTML = `${errors.passErr}`;
        } else{
            if(nameErr.innerHTML === '' && emailErr.innerHTML === '' && passErr.innerHTML === ''  && phoneErr.innerHTML === '')
                hasError = false
        }
        console.log(hasError)

    };
    phoneField.addEventListener('input', (e) => {
        if(!phoneField.value.match(/^[0-9]*$/gi)){
            phoneErr.innerHTML = `${errors.phoneSecondErr}`
            phoneField.value = ''      
        }
        if(phoneField.value !== ''){
            if(phoneField.value.match(/^[0-9]*$/gi))
            phoneErr.innerHTML = '';
        } 
    })
    nameField.addEventListener('input', (e) => {
        if(nameField.value === ''){
            nameErr.innerHTML = `${errors.nameErr}`
        }
        if(nameField.value !== '')
        nameErr.innerHTML = ''
        // console.log(title());
    });
    emailField.addEventListener('input', (e) => {
        if(emailField.value === ''){
            emailErr.innerHTML = `${errors.emailErr}`
        }
        if(emailField.value !== '')
        emailErr.innerHTML = ''
        // console.log(title());
    });
    passwordField.addEventListener('input', (e) => {
        if(passwordField.value === ''){
            passwordErr.innerHTML = `${errors.passErr}`
        }
        if(passwordField.value !== '')
        passErr.innerHTML = ''
        // console.log(title());
    });
    let hasError = true;
    
    if(hasError === false){
        let xhr = new XMLHttpRequest();
        xhr.onload = function(){
            const res = JSON.parse(xhr.response);
            const status = xhr.status;
        }
    }        
    
    function clearErr() { 
        const nameClear = {
        }
        // nameErr.innerHTML = ''
    }
}      