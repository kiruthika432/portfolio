function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for reaching out! I will get back to you soon.');
});

// Add an animation effect when the page loads
window.onload = () => {
    document.body.classList.add('loaded');
};
