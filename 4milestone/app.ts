// Selecting form and resume display area
const resumeForm = document.getElementById('resume-form') as HTMLFormElement;
const resumeSection = document.getElementById('generated-resume') as HTMLElement;

// Event listener for form submission
resumeForm.addEventListener('submit', function (e: Event) {
    e.preventDefault(); // Prevent form submission to server

    // Capture form input values
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;

    const degree = (document.getElementById('degree') as HTMLInputElement).value;
    const institution = (document.getElementById('institution') as HTMLInputElement).value;
    const graduationYear = (document.getElementById('graduationYear') as HTMLInputElement).value;

    const jobTitle = (document.getElementById('jobTitle') as HTMLInputElement).value;
    const company = (document.getElementById('company') as HTMLInputElement).value;
    const jobDescription = (document.getElementById('jobDescription') as HTMLTextAreaElement).value;

    const skills = (document.getElementById('skills') as HTMLInputElement).value.split(',');

    // Dynamically generate the editable resume
    resumeSection.innerHTML = `
        <h2 contenteditable="true" id="name">${name}</h2>
        <p contenteditable="true" id="email">Email: ${email}</p>
        <p contenteditable="true" id="phone">Phone: ${phone}</p>

        <h3>Education</h3>
        <p contenteditable="true" id="education">${degree} - ${institution} (${graduationYear})</p>

        <h3>Work Experience</h3>
        <p contenteditable="true" id="jobTitle"><strong>${jobTitle}</strong> at ${company}</p>
        <p contenteditable="true" id="jobDescription">${jobDescription}</p>

        <h3>Skills</h3>
        <ul id="skills-list">
            ${skills.map(skill => `<li contenteditable="true">${skill.trim()}</li>`).join('')}
        </ul>
    `;

    // Listen for changes to contenteditable elements and update the resume dynamically
    makeEditable();
});

// Function to handle editing on contenteditable sections
function makeEditable() {
    const editableElements = document.querySelectorAll('[contenteditable="true"]');
    editableElements.forEach(element => {
        element.addEventListener('input', () => {
            console.log(`Updated content: ${element.innerHTML}`);
        });
    });
}
