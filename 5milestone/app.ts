// Selecting form and resume display area
const resumeForm = document.getElementById('resume-form') as HTMLFormElement;
const resumeSection = document.getElementById('generated-resume') as HTMLElement;
const shareableSection = document.getElementById('shareable-section') as HTMLElement;
const shareableLinkInput = document.getElementById('shareable-link') as HTMLInputElement;
const copyLinkButton = document.getElementById('copy-link') as HTMLButtonElement;
const downloadPdfButton = document.getElementById('download-pdf') as HTMLButtonElement;

resumeForm.addEventListener('submit', function (e: Event) {
    e.preventDefault(); // Prevent form submission to server

    // Capture form input values
    const username = (document.getElementById('username') as HTMLInputElement).value;
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
        <h2 contenteditable="true">${name}</h2>
        <p contenteditable="true">Email: ${email}</p>
        <p contenteditable="true">Phone: ${phone}</p>

        <h3>Education</h3>
        <p contenteditable="true">${degree} - ${institution} (${graduationYear})</p>

        <h3>Work Experience</h3>
        <p contenteditable="true"><strong>${jobTitle}</strong> at ${company}</p>
        <p contenteditable="true">${jobDescription}</p>

        <h3>Skills</h3>
        <ul>
            ${skills.map(skill => `<li contenteditable="true">${skill.trim()}</li>`).join('')}
        </ul>
    `;

    // Generate unique URL for sharing
    const currentUrl = window.location.origin;
    const resumeUrl = `${currentUrl}/resume?username=${username}`;
    shareableLinkInput.value = resumeUrl;

    // Show shareable link section
    shareableSection.style.display = 'block';

   // Add event listener to download PDF
   downloadPdfButton.addEventListener('click', () => {
    const element = document.getElementById('generated-resume');
    html2pdf().from(element).save();
});
});
