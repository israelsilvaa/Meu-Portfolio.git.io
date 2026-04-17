// Esperar o DOM carregar completamente
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM carregado');

    // Função do menu mobile
    window.menuShow = function() {
        let menuMobile = document.querySelector('.mobile-menu');
        let icon = document.querySelector('.icon');

        console.log('menuShow chamado');
        console.log('Menu mobile:', menuMobile);
        console.log('Ícone:', icon);

        if (!menuMobile) {
            console.error('Menu mobile não encontrado');
            return;
        }

        if (icon) {
            if (menuMobile.classList.contains('open')) {
                menuMobile.classList.remove('open');
                icon.src = "assets/img/btn-open.svg";
                console.log('Menu fechado');
            } else {
                menuMobile.classList.add('open');
                icon.src = "assets/img/btn-close.svg";
                console.log('Menu aberto');
            }
        } else {
            // Fallback sem ícone
            if (menuMobile.classList.contains('open')) {
                menuMobile.classList.remove('open');
                console.log('Menu fechado (sem ícone)');
            } else {
                menuMobile.classList.add('open');
                console.log('Menu aberto (sem ícone)');
            }
        }
    };

    // Sistema de Temas
    const themeButtons = document.querySelectorAll('.theme-btn');
    console.log('Botões de tema encontrados:', themeButtons.length);

    // Carregar tema salvo
    const savedTheme = localStorage.getItem('theme') || 'purple';
    setTheme(savedTheme);

    // Adicionar event listeners para os botões de tema
    if (themeButtons.length > 0) {
        themeButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                const theme = button.getAttribute('data-theme');
                console.log('Tema selecionado:', theme);
                setTheme(theme);
            });
        });
    } else {
        console.warn('Nenhum botão de tema encontrado');
    }
});

function setTheme(theme) {
    console.log('setTheme chamado com:', theme);

    // Remover atributo data-theme existente
    document.documentElement.removeAttribute('data-theme');

    // Adicionar novo tema se não for o padrão (purple)
    if (theme !== 'purple') {
        document.documentElement.setAttribute('data-theme', theme);
    }

    // Atualizar botões ativos
    const themeButtons = document.querySelectorAll('.theme-btn');
    themeButtons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-theme') === theme) {
            btn.classList.add('active');
        }
    });

    // Salvar tema no localStorage
    localStorage.setItem('theme', theme);
    console.log('Tema salvo:', theme);
}