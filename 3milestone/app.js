// Selecting form and resume display area
var resumeForm = document.getElementById('resume-form');
var resumeSection = document.getElementById('generated-resume');
// Event listener for form submission
resumeForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission to server
    // Capture form input values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var degree = document.getElementById('degree').value;
    var institution = document.getElementById('institution').value;
    var graduationYear = document.getElementById('graduationYear').value;
    var jobTitle = document.getElementById('jobTitle').value;
    var company = document.getElementById('company').value;
    var jobDescription = document.getElementById('jobDescription').value;
    var skills = document.getElementById('skills').value.split(',');
    // Dynamically generate the resume
    resumeSection.innerHTML = "\n        <h2>".concat(name, "</h2>\n        <p>Email: ").concat(email, "</p>\n        <p>Phone: ").concat(phone, "</p>\n\n        <h3>Education</h3>\n        <p>").concat(degree, " - ").concat(institution, " (").concat(graduationYear, ")</p>\n\n        <h3>Work Experience</h3>\n        <p><strong>").concat(jobTitle, "</strong> at ").concat(company, "</p>\n        <p>").concat(jobDescription, "</p>\n\n        <h3>Skills</h3>\n        <ul>").concat(skills.map(function (skill) { return "<li>".concat(skill.trim(), "</li>"); }).join(''), "</ul>\n    ");
});
