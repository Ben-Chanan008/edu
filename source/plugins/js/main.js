if (document.querySelector('#index-page')) {
	
	const container = document.querySelector('.images');
	const left = document.querySelector('.fa-arrow-left');
	const logo = document.querySelector('.logo')
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
	slide = function (direction) {
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
	logo.addEventListener('click', () => {
		location.href = './edu.php';
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
	
	function validate(e) {
		let hasError = true;
		data = new FormData(e.currentTarget);
		console.log(e.currentTarget)
		
		e.preventDefault();
		
		if (nameField.value === '' && emailField.value === '' && phoneField.value === '' && passwordField.value === '') {
			nameErr.innerHTML = `${errors.nameErr}`;
			passErr.innerHTML = `${errors.passErr}`;
			emailErr.innerHTML = `${errors.emailErr}`;
			phoneErr.innerHTML = `${errors.phoneFirstErr}`;
			
		} else if (nameField.value !== '' && emailField.value !== '' && phoneField.value === '' && passwordField.value !== '') {
			phoneErr.innerHTML = `${errors.phoneFirstErr}`
			
		} else if (nameField.value === '' && emailField.value !== '' && phoneField.value !== '' && passwordField.value !== '') {
			nameErr.innerHTML = `${errors.nameErr}`
		} else if (nameField.value !== '' && emailField.value === '' && phoneField.value !== '' && passwordField.value !== '') {
			emailErr.innerHTML = `${errors.emailErr}`
		} else if (nameField.value !== '' && emailField.value !== '' && phoneField.value === '' && passwordField.value !== '') {
			passErr.innerHTML = `${errors.passErr}`
		}
		if (nameField.value === '' && emailField.value === '' && phoneField.value === '' && passwordField.value !== '') {
			nameErr.innerHTML = `${errors.nameErr}`;
			emailErr.innerHTML = `${errors.emailErr}`;
			phoneErr.innerHTML = `${errors.phoneFirstErr}`;
		} else if (nameField.value === '' && emailField.value === '' && phoneField.value !== '' && passwordField.value === '') {
			nameErr.innerHTML = `${errors.nameErr}`;
			emailErr.innerHTML = `${errors.emailErr}`;
			passErr.innerHTML = `${errors.passErr}`;
		} else if (nameField.value !== '' && emailField.value === '' && phoneField.value === '' && passwordField.value === '') {
			phoneErr.innerHTML = `${errors.phoneFirstErr}`;
			emailErr.innerHTML = `${errors.emailErr}`;
			passErr.innerHTML = `${errors.passErr}`;
		} else if (nameField.value === '' && emailField.value !== '' && phoneField.value === '' && passwordField.value === '') {
			phoneErr.innerHTML = `${errors.phoneFirstErr}`;
			nameErr.innerHTML = `${errors.nameErr}`;
			passErr.innerHTML = `${errors.passErr}`;
		} else {
			if (nameErr.innerHTML === '' && emailErr.innerHTML === '' && passErr.innerHTML === '' && phoneErr.innerHTML === '')
				hasError = false
		}
		console.log(hasError)
		
		if (hasError === false) {
			let xhr = new XMLHttpRequest();
			xhr.onload = function () {
				const res = JSON.parse(xhr.response);
				const status = xhr.status;
				const message = document.querySelector('#register-form .message');
				// console.log(message)
				console.log(res)
				if (status > 199 && status < 300) {
					message.innerHTML = `<div class="alert alert-success p-1 m-2 w-100 px-2">${res.message}</div>`
					window.history.pushState('home', 'home', './logged_in.php')
					setTimeout(() => {
						location.href = res.redirect
					}, 2000);
					// console.log(status)
				} else {
					if (status === 422) {
						message.innerHTML = `<div clas="alert alert-danger p-1 m-3 px-2">${res.message}</div>`;
						if (Object.keys(res.errors).length) {
							Object.keys(res.errors).forEach(function (key) {
								console.log(res.message)
								const element = document.getElementById(key);
								element.innerHTML = `<div class="alert alert-danger p-1 px-2" style="font-size: 11px;">${res.errors[key]}</div>`;
							});
						} else {
							if (!Object.keys(res.errors).length)
								return;
						}
						
						// if(Object.keys(res.user_errors).length){
						// 	Object.keys(res.user_errors).forEach(function (key){
						// 		// console.log(key);
						// 		const el = document.getElementById(key);
						// 		el.innerHTML = `<div class="alert alert-danger p-1 px-2 m-2">${res.user_errors[key]}<a class="px-3" href="./login.php" style="color:#000; text-decoration:underline;">Log in</a></div>`;
						// 	});
						// }
						
						
						if (res.message.length) {
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
		console.log(`${errors.phoneFirstErr}`)
		if (phoneField.value === '') {
			phoneErr.innerHTML = `${errors.phoneFirstErr}`;
			// console.log(`${errors.phoneFirstErr}`)
		}
		if (phoneField.value !== '')
			phoneErr.innerHTML = '';
	});
	phoneField.addEventListener('input', (e) => {
		if (!phoneField.value.match(/^[0-9]*$/gi)) {
			phoneErr.innerHTML = `${errors.phoneSecondErr}`
			phoneField.value = ''
		}
		if (phoneField.value !== '') {
			if (phoneField.value.match(/^[0-9]*$/gi)) {
				phoneErr.innerHTML = '';
			}
			// if(phoneField.value === '')
		}
	});
	nameField.addEventListener('input', (e) => {
		if (nameField.value === '') {
			nameErr.innerHTML = `${errors.nameErr}`
		}
		if (nameField.value !== '')
			nameErr.innerHTML = ''
		// console.log(title());
	});
	emailField.addEventListener('input', (e) => {
		if (emailField.value === '') {
			emailErr.innerHTML = `${errors.emailErr}`
		}
		if (emailField.value !== '')
			emailErr.innerHTML = ''
		// console.log(title());
	});
	passwordField.addEventListener('input', (e) => {
		if (passwordField.value === '') {
			passwordErr.innerHTML = `${errors.passErr}`
		}
		if (passwordField.value !== '')
			passErr.innerHTML = ''
		// console.log(title());
	});
	
	function clearErr() {
		const nameClear = {}
		// nameErr.innerHTML = ''
	}
}

if (document.querySelector('#login')) {
	const attrib = document.form.getAttribute('action');
	const passwordField = document.querySelector('#password');
	const form = document.querySelector('form');
	const pass = document.querySelector('.fa-eye');
	// console.log(attrib)
	const f_pass = document.querySelector('.f-pass');
	const emailErr = document.querySelector('.emailErr');
	const passErr = document.querySelector('.passErr');
	const message = document.querySelector('.message');
	f_pass.addEventListener('click', (e) => {
		location.href = './forgot-pass.php';
	});
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
	form.addEventListener('submit', (e) => {
		e.preventDefault();
		let xhr = new XMLHttpRequest();
		data = new FormData(form)
		xhr.onload = function () {
			const res = JSON.parse(xhr.response);
			const status = xhr.status;
			// console.log(status)
			if (status === 422) {
				emailErr.innerHTML = `<div class="alert alert-danger p-1 px-2 m-2">${res.message}</div>`;
				passErr.innerHTML = `<div class="alert alert-danger p-1 px-2 m-2">${res.message}</div>`;
			} else {
				console.log(status)
				if (status > 199 && status < 300) {
					message.innerHTML = `<div class="alert alert-success p-1 px-2 mx-2"><i class="fa fa-spin fa-spinner-third m-2"></i>${res.message}</div>`
				}
				if (status === 400) {
					message.innerHTML = `<div class="alert alert-danger p-1 px-2 m-2">${res.message}</div>`
				} else {
					if (status === 200) {
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

if (document.querySelector('#profile')) {
	let camera = false;
	// console.log(camera)
	const picContainer = document.querySelector('.user');
	const edit = document.querySelector('.edit');
	const textarea = document.querySelector('.textarea');
	const opBtn = document.querySelector('.operation-buttons');
	const btn = document.querySelector('.btn-btn');
	const save = document.getElementsByClassName('save');
	picContainer.addEventListener('mouseover', (e) => {
		console.log(e)
		picContainer.classList.remove('fa-user');
		picContainer.classList.add('fa-camera');
		picContainer.classList.add('change-style');
		camera = true;
		console.log(camera);
		if (camera === true) {
			// picContainer.addEventListener('click', () => {
			
			// });
			console.log('e')
			setTimeout(() => {
				picContainer.classList.remove('fa-camera', 'fa-10x');
				picContainer.classList.add('fa-user', 'fa-7x');
			}, 3000)
		}
	});
	edit.addEventListener('click', buttons);
	const self = "<?php htmlspecialchars($_SERVER['PHP_SELF']);?>";
	
	function buttons() {
		textarea.style.display = 'block';
		btn.innerHTML = '<div></div>';
		opBtn.innerHTML = '<button class="bg-red p-2 w-75 text-white rounded" id="del"><i class="fas fa-bin"></i>Cancel</button>'
		const del = document.getElementById('del');
		console.log(del)
		del.addEventListener('click', (e) => {
			btn.innerHTML = '<button class="rounded-3 m-1 p-2 w-75 edit"><i class="fa-solid fa-pen mx-2"></i>Edit Profile</button>'
			opBtn.innerHTML = '<div></div>';
			textarea.innerHTML = '';
		});
		// setInterval(buttons, 10)
	}
	
	// picContainer.addEventListener('mouseout', (e) => {
	// });
}

if (document.querySelector('#fpass')) {
	const attribute = document.form.getAttribute('action');
	const body = document.querySelector('body');
	const radio = document.querySelectorAll('input');
	// radio.forEach(function(input) {
	// 	if(input.type = "radio"){
	// 		console.log('radio')
	// 	}
	// });
	radio.getAttribute
	console.log(attribute)
	const keyframe = [
		{
			opacity: 0,
			transform: 'scale(1.2)'
		},
		{
			opacity: 1,
			transform: 'scale(1)'
		}
	]
	const timing = {
		duration: 700,
		iteration: 1,
	}
	document.addEventListener('DOMContentLoaded', function () {
		body.animate(keyframe, timing);
		setTimeout(() => {
			body.style.opacity = 1;
		}, timing.duration)
	})
	// document.querySelector('body').style.backgroundColor = "blue";
	let switchedPage = false;
	const aform = document.querySelector('.my-form');
	// console.log(form)
	const email = document.querySelector('.emailVal');
	const code = document.querySelector('.code');
	const verify = document.querySelector('.verify');
	const firstVerify = document.querySelector('.first-verify');
	aform.addEventListener('submit', (e) => submit(e))
	
	function submit(e) {
		e.preventDefault();
		console.log(e.currentTarget)
		let xhr = new XMLHttpRequest();
		data = new FormData(aform);
		
		xhr.onload = function () {
			const status = xhr.status;
			const res = JSON.parse(xhr.response);
			console.log(res)
			console.log(status);
			if (status === 422) {
				console.log(status);
				email.innerHTML = `<div class="alert alert-danger m-2"><i class="fa fas fa-exclamation-triangle me-1"></i>${res.error}</div>`;
				
				if (Object.keys(res.errors).length) {
					email.innerHTML = '';
					Object.keys(res.errors).forEach(function (key) {
						const el = document.getElementById(key);
						el.innerHTML = `<div class="alert alert-danger m-2 px-1"><i class="fa fas fa-exclamation-triangle me-1"></i>${res.errors[key]}</div>`
					});
				}
			} else {
				if (status === 200) {
					email.innerHTML = `<div class="alert alert-success m-2">${res.message}</div>`;
					// code.innerHTML = `<div class="bg-dark rounded"><p class="text-white text-center">${res.next}</p></div>`;
					location.href = `${res.redirect}`;
				}
			}
			console.log(data);
		}
		xhr.open("POST", `${attribute}`);
		xhr.send(data);
	}
}
