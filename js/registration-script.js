const registrationForm = document.querySelector('.registration-form');
const loginInput = document.getElementById('login');
const passwordInput = document.getElementById('password');
const ageInput = document.getElementById('age');
const confirmPasswordInput = document.getElementById('confirmPassword');
const usernameInput = document.getElementById('name');
const submitButton = document.getElementById('submitButton');

registrationForm.addEventListener('submit', (e) => {
    e.preventDefault(); 

    const email = loginInput.value.trim();
    const age = ageInput.value;
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;
    const username = usernameInput.value.trim();

    if (!email || !age || !password || !confirmPassword || !username) {
        alert('Пожалуйста, заполните все поля');
        return; 
    }

    if (password !== confirmPassword) {
        alert('Пароли не совпадают');
        passwordInput.focus();
        return; 
    }

    const user = {
        email: email,
        password: password,
        username: username,
        age: age,
        isSignedIn: true
    }

    const id = hashEmail(email);
    if (localStorage.getItem(id) == null) {
        localStorage.setItem(id, JSON.stringify(user));
        alert('Регистрация успешна');
        registrationForm.reset();
        window.location.href = 'index.html';
    } else {
        alert('Пользователь с такой почтой уже существует!');
        loginInput.focus();
    }
});

function hashEmail(email) {
    let hash = 0;
    for (let i = 0; i < email.length; i++) {
        const char = email.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash;
    }
    return Math.abs(hash).toString(16);
}
