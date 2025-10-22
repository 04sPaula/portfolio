document.addEventListener('DOMContentLoaded', () => {
    // Lógica para animar elementos ao rolar a página
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    if (animatedElements.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        animatedElements.forEach(element => {
            observer.observe(element);
        });
    }

    // Lógica para o carrossel de projetos com scroll infinito
    const carousel = document.querySelector('.projects-carousel');
    if (carousel) {
        const originalItems = Array.from(carousel.children);
        const itemsToClone = originalItems.slice(0, originalItems.length);

        itemsToClone.forEach(item => {
            const clone = item.cloneNode(true);
            clone.setAttribute('aria-hidden', 'true');
            carousel.appendChild(clone);
        });

        let scrollWidth = 0;
        const gap = parseFloat(getComputedStyle(carousel).gap) || 0;

        originalItems.forEach(item => {
            scrollWidth += item.offsetWidth + gap;
        });

        carousel.style.setProperty('--scroll-width', `${scrollWidth}px`);
    }
});