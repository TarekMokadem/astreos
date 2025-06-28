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
        const bannerTitle = document.querySelector('.banner .title');
        const bannerContent = document.querySelector('.banner .content');
        const bannerButton = document.querySelector('.banner-button');
        
        if (bannerTitle) bannerTitle.classList.add('fade-in');
        if (bannerContent) bannerContent.classList.add('fade-in');
        if (bannerButton) bannerButton.classList.add('fade-in');

        // Sections de services
        document.querySelectorAll('.boxs1, .boxs2, .boxs3').forEach((box, index) => {
            box.classList.add(index % 2 === 0 ? 'slide-in-left' : 'slide-in-right');
        });

        // Section "Pourquoi Nous Choisir"
        const whyChooseTitle = document.querySelector('.why-choose-us .title');
        if (whyChooseTitle) whyChooseTitle.classList.add('fade-in');
        document.querySelectorAll('.reason').forEach((reason, index) => {
            reason.classList.add('scale-in');
        });

        // Section CTA
        const ctaSection = document.querySelector('.cta-intermediate');
        if (ctaSection) ctaSection.classList.add('fade-in');

        // Section "Nos Engagements"
        const commitmentsTitle = document.querySelector('.our-commitments .title');
        if (commitmentsTitle) commitmentsTitle.classList.add('fade-in');
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

    // Back to Top Button - Utiliser le bouton existant au lieu d'en créer un nouveau
    const backToTopButton = document.querySelector('.back-to-top');
    
    if (backToTopButton) {
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
    }
}); 