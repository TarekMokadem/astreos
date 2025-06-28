document.addEventListener('DOMContentLoaded', function() {
    // Fonction pour vérifier si un élément est visible dans la fenêtre
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Fonction pour gérer les animations au défilement
    function handleScrollAnimations() {
        const animatedElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .scale-in');
        
        animatedElements.forEach(element => {
            if (isElementInViewport(element)) {
                element.classList.add('visible');
            }
        });
    }

    // Ajouter les classes d'animation aux éléments
    function addAnimationClasses() {
        // Bannière
        document.querySelector('.banner .title').classList.add('fade-in');
        document.querySelector('.banner .content').classList.add('fade-in');
        document.querySelector('.banner-button').classList.add('fade-in');

        // Sections de services
        document.querySelectorAll('.boxs1, .boxs2, .boxs3').forEach((box, index) => {
            box.classList.add(index % 2 === 0 ? 'slide-in-left' : 'slide-in-right');
        });

        // Section "Pourquoi Nous Choisir"
        document.querySelector('.why-choose-us .title').classList.add('fade-in');
        document.querySelectorAll('.reason').forEach((reason, index) => {
            reason.classList.add('scale-in');
        });

        // Section CTA
        document.querySelector('.cta-intermediate').classList.add('fade-in');

        // Section "Nos Engagements"
        document.querySelector('.our-commitments .title').classList.add('fade-in');
        document.querySelectorAll('.commitment').forEach((commitment, index) => {
            commitment.classList.add('scale-in');
        });

        // Section Contact - CORRIGÉ : utiliser la nouvelle classe modern-contact-section
        const contactSection = document.querySelector('.modern-contact-section');
        if (contactSection) {
            contactSection.classList.add('fade-in');
        }
    }

    // Initialiser les animations
    addAnimationClasses();
    handleScrollAnimations();

    // Écouter le défilement pour déclencher les animations
    window.addEventListener('scroll', handleScrollAnimations);

    // Back to Top Button
    const backToTopButton = document.createElement('button');
    backToTopButton.className = 'back-to-top';
    backToTopButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
    document.body.appendChild(backToTopButton);

    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    });

    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}); 