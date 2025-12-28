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