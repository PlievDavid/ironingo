const authorisationForm = document.querySelector('.authorisation-form');
const loginInput = document.getElementById('login');
const passwordInput = document.getElementById('password');

authorisationForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = loginInput.value.trim();
    const password = passwordInput.value;

    if (!email || !password) {
        alert('Пожалуйста, заполните все поля');
        return;
    }

    const id = hashEmail(email);
    const user = localStorage.getItem(id);

    if (user == null) {
        alert('Пользователь не найден');
        loginInput.focus();
        return;
    }

    const userData = JSON.parse(user);

    if (userData.password !== password) {
        alert('Неверный пароль');
        passwordInput.focus();
        return;
    }

    alert('Авторизация успешна');
    authorisationForm.reset();
    localStorage.setItem('currentUser', id);
    window.location.href = 'index.html';
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