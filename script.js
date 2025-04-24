document.addEventListener('DOMContentLoaded', () => {
    // Płynne przewijanie do sekcji
    const links = document.querySelectorAll('nav a');
    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));
            target.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Powrót do góry
    const backToTop = document.getElementById('backToTop');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTop.style.display = 'block';
        } else {
            backToTop.style.display = 'none';
        }
    });

    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Prosta walidacja formularza
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Dziękujemy za wiadomość!');
        form.reset();
    });
});
