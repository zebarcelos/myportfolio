document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav a');
    const projectLink = document.querySelector('.intro .btn');
    const sections = document.querySelectorAll('.section');

    // Function to handle navigation and fade effects
    const navigateToSection = (targetId) => {
        const targetSection = document.getElementById(targetId);

        sections.forEach(section => {
            if (section !== targetSection) {
                section.classList.add('fade-out');
                section.classList.remove('fade-in');
            }
        });

        setTimeout(() => {
            targetSection.classList.add('fade-in');
            targetSection.classList.remove('fade-out');
        }, 500); // Match the transition duration in CSS

        setTimeout(() => {
            window.location.hash = targetId;
        }, 600); // Give enough time for the fade-in effect before changing the URL hash
    };

    // Event listener for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = e.target.getAttribute('href').substring(1);
            navigateToSection(targetId);
        });
    });

    // Event listener for project link in the intro section
    projectLink.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = e.target.getAttribute('href').substring(1);
        navigateToSection(targetId);
    });
});
