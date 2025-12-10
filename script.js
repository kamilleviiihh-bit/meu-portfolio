document.addEventListener('DOMContentLoaded', () => {
    const toggleTheme = document.getElementById("toggleTheme");
    const rootHtml = document.documentElement;
    const menuLinks = document.querySelectorAll(".menu-link");
    const menuHamburger = document.getElementById('menuHamburger');
    const menuMobile = document.getElementById('menuMobile');
    const icon = menuHamburger?.querySelector('i');

    // 1. Alternar tema (claro/escuro)
    function changeTheme() {
        const currentTheme = rootHtml.getAttribute("data-theme");
        const isDark = currentTheme === "dark";
        // Altera o atributo data-theme na tag <html>
        rootHtml.setAttribute("data-theme", isDark ? "light" : "dark");
        
        if (toggleTheme) {
            // Alterna os ícones do Bootstrap para representar o tema (sol/lua)
            toggleTheme.classList.toggle("bi-sun", isDark); 
            toggleTheme.classList.toggle("bi-moon-stars-fill", !isDark); 
        }
    }
    
    // Configuração inicial do ícone de tema
    if (toggleTheme) {
        const isDark = rootHtml.getAttribute("data-theme") === "dark";
        // Certifica-se de que a classe correta está presente na inicialização
        toggleTheme.classList.add(isDark ? "bi-moon-stars-fill" : "bi-sun");
        toggleTheme.addEventListener("click", changeTheme);
    }


    // 2. Navegação e Menu Mobile
    menuLinks.forEach(item => {
        item.addEventListener("click", () => {
            // Fecha o menu mobile ao clicar no link para navegar
            if (menuMobile?.classList.contains('active')) {
                menuMobile.classList.remove('active');
                if (icon) {
                    icon.classList.remove('bi-x-lg');
                    icon.classList.add('bi-list');
                }
            }
        });
    });

    // Alternar menu mobile e ícone (list/x)
    function toggleMenu() {
        const isOpen = menuMobile.classList.toggle('active');
        if (icon) {
            // Usa 'bi-list' para Fechado e 'bi-x-lg' para Aberto
            icon.classList.toggle('bi-list', !isOpen);
            icon.classList.toggle('bi-x-lg', isOpen);
        }
    }

    if (menuHamburger) {
        menuHamburger.addEventListener('click', toggleMenu);
    }
});