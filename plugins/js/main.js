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
    const pass = document.querySelector('.fa-eye');
    const errors = {
        nameErr: '<div class="text-danger p-1">Name needed please</div>',
        emailErr: '<div class="text-danger p-1">Email needed please</div>',
        passErr: `<div class="text-danger p-1">This field requires minimum of ${minLength} and maximum of ${maxLength}</div>`,
        phoneFirstErr: '<div class="text-danger p-1">Phone number please</div>',
        phoneSecondErr: '<div class="text-danger p-1">Must be numbers</div>',
    }
    
    pass.addEventListener('click', () => {
        pass.classList.remove('fa-eye');
        pass.classList.add('fa-eye-slash');
        passwordField.setAttribute('type', 'text')
        // if(passwordField.setAttribute('type', 'text')){
            pass.addEventListener('dblclick', () => {
                pass.classList.remove('fa-eye-slash');
                pass.classList.add('fa-eye');
                passwordField.setAttribute('type', 'password')
            });
        // }
    });
    
    passwordField.addEventListener('input', () => {
        console.log(pass)
        pass.classList.add('block');
    });
    // console.log(errors.phoneFirstErr)
    form.addEventListener('submit', (e) => validate(e))
    function validate(e){
        let hasError = true;
            data = new FormData(e.currentTarget);
        console.log(e.currentTarget)

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
        
        if(hasError === false){
            let xhr = new XMLHttpRequest();
            xhr.onload = function(){
                const res = JSON.parse(xhr.response);
                const status = xhr.status;
                const message = document.querySelector('#register-form .message');
                // console.log(message)
                console.log(res)
                if(status > 199 && status < 300){
                    message.innerHTML = `<div class="alert alert-success p-1 m-2 w-100 px-2">${res.message}</div>`
                    window.history.pushState('home', 'home', './logged_in.php')
                    setTimeout(() => {
                        location.href = res.redirect    
                    }, 2000);
                    // console.log(status)
                } else {
                    if(status === 422){
                        message.innerHTML = `<div clas="alert alert-danger p-1 m-3 px-2">${res.message}</div>`;
                        if(Object.keys(res.errors).length){
                            Object.keys(res.errors).forEach(function(key){
                                console.log(key)
                                const element = document.getElementById(key);
                                element.innerHTML = `<div class="alert alert-danger p-1 px-2" style="font-size: 11px;">${res.errors[key]}<a class="px-3" href="./login.php" style="color:#000; text-decoration:underline;">Log in</a></div>`;
                            });
                        }
                        if(res.message.length){
                            message.innerHTML = `<div class="alert alert-danger p-1 px-2">${res.message}</div>`
                        }
                        // console.log(status)
                    }
                }
            }
            xhr.open("POST", e.currentTarget.getAttribute('action'));
            xhr.send(data)
        }        
    }
   
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
    function clearErr() { 
        const nameClear = {
        }
        // nameErr.innerHTML = ''
    }
}

if(document.querySelector('#login')){
    const attrib = document.form.getAttribute('action');
    const form = document.querySelector('form');
    console.log(attrib)
    const emailErr = document.querySelector('.emailErr');
    const passErr = document.querySelector('.passErr');
    const message = document.querySelector('.message');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let xhr = new XMLHttpRequest();
        data = new FormData(form)
        xhr.onload = function(){    
            const res = JSON.parse(xhr.response);
            const status = xhr.status;
            // console.log(status)
        if(status === 422){
            emailErr.innerHTML = `<div class="alert alert-danger p-1 px-2 m-2">${res.message}</div>`;
            passErr.innerHTML = `<div class="alert alert-danger p-1 px-2 m-2">${res.message}</div>`;
        } else{
            console.log(status)
            if(status > 199 && status < 300){
                message.innerHTML = `<div class="alert alert-success p-1 px-2 mx-2"><i class="fa fa-spin fa-spinner-third m-2"></i>${res.message}</div>`
            }
            if(status === 400){
                message.innerHTML = `<div class="alert alert-danger p-1 px-2 m-2">${res.message}</div>`
            } else{
                if(status === 200){
                    console.log(res.redirect);
                    // function redirect(){
                    //     res.redirect;
                    // }
                    window.history.pushState('home', 'home', './edu.php')
                    setTimeout(() => {
                        message.innerHTML = `<div class="alert alert-success p-1 px-2 m-2"><i class="fa fa-spin fa-spinner-third mx-2"></i>${res.message}</div>`;
                        location.href = res.redirect;
                    }, 1500);
                }
            }
            console.log(data)
        }
    }
    console.log(data)
    xhr.open("POST", `${attrib}`);
    xhr.send(data);
    });

}