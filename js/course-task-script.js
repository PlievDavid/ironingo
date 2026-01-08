const sideRefs = document.getElementById("refs");
const params = new URLSearchParams(window.location.search);
const taskId = Number(params.get('taskId'));
const courseId = Number(params.get('courseId'));
const courseData = document.getElementById('data')
let courseName = "";
switch(courseId)
{
    case 1:courseName = 'Ирон сывӕллон';break;
     case 2:courseName = 'Хистӕр';break;
      case 3:courseName = 'Филолог';break;
}
sideRefs.innerHTML = `
    <strong>“${courseName}”</strong>
    <p style = "margin:0;"><strong>0/5</strong> баллов получено</p>
    <hr style = "width:13vw">
    <strong>Введение</strong>
    <hr style = "width:13vw">
    <div class = "task-group">
        <a href = "course-task.html?taskId=1&courseId=${courseId}">История осетинского языка</a>
        <a href = "course-task.html?taskId=2&courseId=${courseId}">Буквы осетинского языка</a>
        <a href = "course-task.html?taskId=3&courseId=${courseId}">Уникальные звуки осетинского языка</a>
        <a href = "course-task.html?taskId=4&courseId=${courseId}">Словообразование</a>
    </div>
    <hr style = "width:13vw">
`
let dataHead = "";
switch(taskId)
{
    case 1:dataHead = "История осетинского языка";break;
    case 2:dataHead = "Буквы осетинского языка";break;
    case 3:dataHead = "Уникальные звуки осетинского языка";break;
    case 4:dataHead = "Словообразование";break;
    case 5:window.location.href = `course-task.html?taskId=${taskId-1}&courseId=${courseId}`;break;
}
courseData.innerHTML = `
    <h1>${dataHead}</h1>
    <p>Предшественником современного осетинского языка является аланский язык — язык племени аланов, с начала I века н.э. расселившихся в Предкавказье, Приазовье, Крыму и бассейне Дона. Предками аланов, в свою очередь, являются ираноязычные скифо-сарматские племена. 
</p>
    <p>Существует теория двуприродного происхождения осетинского языка: иранский по происхождению, язык осетин подвергся значительному кавказскому влиянию. Доказательством тому служит наличие в осетинском языке кавказского субстрата. 
p</p>
    <p>Современный осетинский язык сложился в результате внесения языка аланов, ушедших от нашествий монголо-татар и Тамерлана с предгорий Северного Кавказа в горы Центрального Кавказа, в среду проживавшего в этом районе аборигенного населения (говорившего, предположительно, на одном или нескольких кавказских языках).</p>
    <p>Первые письменные памятники современного осетинского языка датируются концом XVIII века. Первые варианты письменности возникли из-за необходимости обучения в церковных школах.</p>
    <a href = "course-task.html?taskId=${taskId+1}&courseId=${courseId}" style = "margin-left:55vw;text-decoration: none;color: white;background-color: black;border-radius: 5px;padding:5px;">Следующий шаг</a>
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
