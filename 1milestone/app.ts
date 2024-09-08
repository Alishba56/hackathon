// Get the skills section and toggle button from the DOM
const skillsSection = document.getElementById("skills-section") as HTMLElement;
const toggleSkillsBtn = document.getElementById("toggle-skills-btn") as HTMLButtonElement;

// Initial check to make sure these elements exist
if (skillsSection && toggleSkillsBtn) {
    // Function to toggle the visibility of the skills section
    const toggleSkillsVisibility = () => {
        if (skillsSection.style.display === "none") {
            skillsSection.style.display = "block"; // Show skills section
            toggleSkillsBtn.textContent = "Hide Skills"; // Change button text
        } else {
            skillsSection.style.display = "none"; // Hide skills section
            toggleSkillsBtn.textContent = "Show Skills"; // Change button text
        }
    };
    // Add event listener to button for click event
    toggleSkillsBtn.addEventListener("click", toggleSkillsVisibility);
}
