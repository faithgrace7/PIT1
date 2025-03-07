// Search function for filtering courses
function searchCourses() {
    let input = document.getElementById("searchCourse").value.toLowerCase();
    let courses = document.querySelectorAll(".course-item");

    courses.forEach(course => {
        let text = course.innerText.toLowerCase();
        course.style.display = text.includes(input) ? "block" : "none";
    });
}
