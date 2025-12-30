const easyCourse = document.getElementById("easy-course");
const middleCourse = document.getElementById("middle-course");
const hardCourse = document.getElementById("hard-course");


            
easyCourse.addEventListener('click',() => {
    window.location.href = `course-main.html?id=1&img=images/beginner-course.png`
})
middleCourse.addEventListener('click',() => {
    window.location.href = `course-main.html?id=2&img=images/intermediate-course.png`
})
hardCourse.addEventListener('click',() => {
    window.location.href = `course-main.html?id=3&img=images/advanced-course.png`
})

const userProfile = document.getElementById('userProfile');
const regLink = document.querySelector('a[href="registration.html"]');
const authLink = document.querySelector('a[href="authorisation.html"]');
function checkUserSignedIn() {
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const user = JSON.parse(localStorage.getItem(key));
        
        if (user && user.isSignedIn === true) {
            
            const add = document.querySelector(".add");
            add.style.display = "none";
            userProfile.textContent = user.username;
            userProfile.hidden = false;
            regLink.hidden = true;
            authLink.hidden = true;
            break;
        }
    }
}

checkUserSignedIn();
