
// Define o tema black diretamente
document.body.classList.add('dark-mode');

// Define as variáveis de cor para o tema black
document.documentElement.style.setProperty('--color-white', '#111111');
document.documentElement.style.setProperty('--color-black', '#fff');

// Ajusta o logo para o tema black
const headerLogoImg = document.getElementById('header-logo-img');
const footerLogoImg = document.getElementById('footer-logo-img');

if (headerLogoImg) {
    headerLogoImg.src = 'assets/img/logo-darkmode.png';
}

if (footerLogoImg) {
    footerLogoImg.src = 'assets/img/logo-darkmode.png';
}
