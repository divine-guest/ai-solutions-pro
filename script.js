// === БУРГЕР-МЕНЮ ===
document.getElementById('burger').addEventListener('click', function() {
    const nav = document.querySelector('.nav');
    if (nav.style.display === 'flex' && nav.style.flexDirection === 'column') {
        nav.style.display = 'flex';
        nav.style.flexDirection = 'row';
    } else {
        nav.style.display = 'flex';
        nav.style.flexDirection = 'column';
        nav.style.position = 'absolute';
        nav.style.top = '70px';
        nav.style.left = '0';
        nav.style.width = '100%';
        nav.style.background = '#0a0a0f';
        nav.style.padding = '20px';
        nav.style.borderBottom = '1px solid rgba(255,255,255,0.04)';
        nav.style.gap = '16px';
        nav.style.alignItems = 'center';
    }
});

// === ФОРМА ===
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('✅ Заявка принята! Мы свяжемся с вами.');
            this.reset();
        });
    }
});

console.log('🚀 AI Solutions — профессиональный сайт');