// Selecting form and resume display area
var resumeForm = document.getElementById('resume-form');
var resumeSection = document.getElementById('generated-resume');
var shareableSection = document.getElementById('shareable-section');
var shareableLinkInput = document.getElementById('shareable-link');
var copyLinkButton = document.getElementById('copy-link');
var downloadPdfButton = document.getElementById('download-pdf');
resumeForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission to server
    // Capture form input values
    var username = document.getElementById('username').value;
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
    // Dynamically generate the editable resume
    resumeSection.innerHTML = "\n        <h2 contenteditable=\"true\">".concat(name, "</h2>\n        <p contenteditable=\"true\">Email: ").concat(email, "</p>\n        <p contenteditable=\"true\">Phone: ").concat(phone, "</p>\n\n        <h3>Education</h3>\n        <p contenteditable=\"true\">").concat(degree, " - ").concat(institution, " (").concat(graduationYear, ")</p>\n\n        <h3>Work Experience</h3>\n        <p contenteditable=\"true\"><strong>").concat(jobTitle, "</strong> at ").concat(company, "</p>\n        <p contenteditable=\"true\">").concat(jobDescription, "</p>\n\n        <h3>Skills</h3>\n        <ul>\n            ").concat(skills.map(function (skill) { return "<li contenteditable=\"true\">".concat(skill.trim(), "</li>"); }).join(''), "\n        </ul>\n    ");
    // Generate unique URL for sharing
    var currentUrl = window.location.origin;
    var resumeUrl = "".concat(currentUrl, "/resume?username=").concat(username);
    shareableLinkInput.value = resumeUrl;
    // Show shareable link section
    shareableSection.style.display = 'block';
    // Add event listener to download PDF
    downloadPdfButton.addEventListener('click', function () {
        var element = document.getElementById('generated-resume');
        html2pdf().from(element).save();
    });
});
