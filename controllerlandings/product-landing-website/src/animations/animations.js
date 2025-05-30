const animateOnScroll = () => {
    const elements = document.querySelectorAll('.animate-on-scroll');
    const windowHeight = window.innerHeight;

    const checkVisibility = () => {
        elements.forEach(element => {
            const rect = element.getBoundingClientRect();
            if (rect.top < windowHeight && rect.bottom > 0) {
                element.classList.add('visible');
            } else {
                element.classList.remove('visible');
            }
        });
    };

    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Initial check
};

const hoverEffect = () => {
    const hoverElements = document.querySelectorAll('.hover-effect');

    hoverElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            element.classList.add('hovered');
        });

        element.addEventListener('mouseleave', () => {
            element.classList.remove('hovered');
        });
    });
};

document.addEventListener('DOMContentLoaded', () => {
    animateOnScroll();
    hoverEffect();
});