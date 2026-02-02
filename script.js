document.addEventListener('DOMContentLoaded', () => {
    // --- Mobil Menü ---
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if(hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // --- Tema Değiştirici ---
    const body = document.body;
    const btns = document.querySelectorAll('.theme-btn');

    // Kayıtlı temayı hatırla
    const savedTheme = localStorage.getItem('siteTheme');
    if (savedTheme) {
        body.classList.add(savedTheme);
        updateActiveBtn(savedTheme);
    }

    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            const theme = btn.getAttribute('data-theme');
            
            // Sınıfları temizle ve yenisini ekle
            body.classList.remove('theme-nature', 'theme-corporate');
            if (theme !== 'default') {
                body.classList.add(theme);
            }
            
            // Kaydet
            localStorage.setItem('siteTheme', theme === 'default' ? '' : theme);
            updateActiveBtn(theme === 'default' ? '' : theme);
        });
    });

    function updateActiveBtn(themeClass) {
        btns.forEach(btn => {
            const btnTheme = btn.getAttribute('data-theme');
            if (themeClass === '' || themeClass === null) {
                if (btnTheme === 'default') btn.classList.add('active');
                else btn.classList.remove('active');
            } else {
                if (btnTheme === themeClass) btn.classList.add('active');
                else btn.classList.remove('active');
            }
        });
    }
});
