const infoDiv = document.getElementById('info');
const taskRefs = document.getElementById('refs');
const params = new URLSearchParams(window.location.search);
const courseId = Number(params.get('id'));
const courseImg = params.get('img');
infoDiv.innerHTML = `<img src = ${courseImg} width = "80" style = "border:3px solid gray;border-radius: 5px;">`;
if (courseId === 1)
{
    infoDiv.innerHTML += `<strong>“Ирон сывӕллон”</strong>`;
}
else if (courseId === 2)
{
    infoDiv.innerHTML += `<strong>“Хистӕр”</strong>`;
}
else
{
    infoDiv.innerHTML += `<strong>“Филолог”</strong>`;
}
infoDiv.innerHTML +=`
    <p style = "margin:0;"><strong>0/5</strong> баллов получено</p>
    <a href = "course-task.html">Продолжить</a>
`;
taskRefs.innerHTML = `
    <h2 style = "border:1px solid gray;padding:10px;width:600px;margin-bottom:7px;border-radius: 5px;border-left: 10px solid rgb(255, 219, 152);">Введение</h2>
    <div class = "task-label">
        <a href = "course-task.html?taskId=1&courseId=${courseId}">История осетинского языка</a> 
        1
    </div>
    <div class = "task-label">
        <a href = "course-task.html?taskId=2&courseId=${courseId}">Буквы осетинского языка</a> 
        2
    </div>
    <div class = "task-label">
        <a href = "course-task.html?taskId=3&courseId=${courseId}">Уникальные звуки осетинского языка</a> 
        3
    </div>
    <div class = "task-label">
        <a href = "course-task.html?taskId=4&courseId=${courseId}">Словообразование</a> 
        4
    </div>
`;

const userProfile = document.getElementById('userProfile');
const regLink = document.querySelector('a[href="registration.html"]');
const authLink = document.querySelector('a[href="authorisation.html"]');
function checkUserSignedIn() {
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const user = JSON.parse(localStorage.getItem(key));
        
        if (user && user.isSignedIn === true) {
            
            userProfile.textContent = user.username;
            userProfile.hidden = false;
            regLink.hidden = true;
            authLink.hidden = true;
            break;
        }
    }
}

checkUserSignedIn();
