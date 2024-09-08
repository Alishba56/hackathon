// Get the skills section and toggle button from the DOM
var skillsSection = document.getElementById("skills-section");
var toggleSkillsBtn = document.getElementById("toggle-skills-btn");
// Initial check to make sure these elements exist
if (skillsSection && toggleSkillsBtn) {
    // Function to toggle the visibility of the skills section
    var toggleSkillsVisibility = function () {
        if (skillsSection.style.display === "none") {
            skillsSection.style.display = "block"; // Show skills section
            toggleSkillsBtn.textContent = "Hide Skills"; // Change button text
        }
        else {
            skillsSection.style.display = "none"; // Hide skills section
            toggleSkillsBtn.textContent = "Show Skills"; // Change button text
        }
    };
    // Add event listener to button for click event
    toggleSkillsBtn.addEventListener("click", toggleSkillsVisibility);
}
