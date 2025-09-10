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

    // Lógica para o cursor customizado
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorOutline = document.querySelector('.cursor-outline');
    let mouseX = 0;
    let mouseY = 0;
    let dotX = 0;
    let dotY = 0;
    let outlineX = 0;
    let outlineY = 0;
    const easeDot = 0.15;
    const easeOutline = 0.12;

    window.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function animateCursor() {
        dotX += (mouseX - dotX) * easeDot;
        dotY += (mouseY - dotY) * easeDot;
        outlineX += (mouseX - outlineX) * easeOutline;
        outlineY += (mouseY - outlineY) * easeOutline;

        cursorDot.style.left = `${dotX}px`;
        cursorDot.style.top = `${dotY}px`;
        cursorOutline.style.left = `${outlineX}px`;
        cursorOutline.style.top = `${outlineY}px`;

        requestAnimationFrame(animateCursor);
    }

    animateCursor();

    // Lógica para o efeito hover do cursor em elementos interativos
    const interactiveElements = document.querySelectorAll('a, button');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseover', () => {
            cursorDot.classList.add('hover');
            cursorOutline.classList.add('hover');
        });
        el.addEventListener('mouseout', () => {
            cursorDot.classList.remove('hover');
            cursorOutline.classList.remove('hover');
        });
    });
});