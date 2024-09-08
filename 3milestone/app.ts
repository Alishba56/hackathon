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

    // Dynamically generate the resume
    resumeSection.innerHTML = `
        <h2>${name}</h2>
        <p>Email: ${email}</p>
        <p>Phone: ${phone}</p>

        <h3>Education</h3>
        <p>${degree} - ${institution} (${graduationYear})</p>

        <h3>Work Experience</h3>
        <p><strong>${jobTitle}</strong> at ${company}</p>
        <p>${jobDescription}</p>

        <h3>Skills</h3>
        <ul>${skills.map(skill => `<li>${skill.trim()}</li>`).join('')}</ul>
    `;
});
