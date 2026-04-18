// Processar JSON e transformar em HTML quando HTMX carrega os dados
document.body.addEventListener('htmx:beforeSwap', function(evt) {
    if (evt.detail.xhr.status === 200) {
        const responseText = evt.detail.xhr.responseText;
        try {
            const projetos = JSON.parse(responseText);
            const html = gerarCardsHTML(projetos);
            evt.detail.serverResponse = html;
        } catch (error) {
            console.error('Erro ao processar JSON:', error);
        }
    }
});

function gerarCardsHTML(projetos) {
    return projetos.map(projeto => criarCardHTML(projeto)).join('');
}

function criarCardHTML(projeto) {
    const tecnologias = projeto.tecnologias.map(tec => {
        return `<span class="${getTecnologiaClass(tec)}">${tec} </span>`;
    }).join('');

    let footerButtons = '';
    if (projeto.disabled) {
        footerButtons = `
            <button disabled style="opacity: 0.5; cursor: not-allowed;">
                Em breve
            </button>
        `;
    } else {
        if (projeto.btn_site) {
            footerButtons += `
                <button class="btn-deploy">
                    <a href="${projeto.btn_site}" target="_blank">
                        Ver Site
                    </a>
                </button>
            `;
        }
        if (projeto.btn_git) {
            footerButtons += `
                <button>
                    <a href="${projeto.btn_git}" target="_blank">
                        GitHub
                    </a>
                </button>
            `;
        }
    }

    return `
        <div class="card">
            <div class="card-header">
                <img src="${projeto.imagem}" alt="${projeto.nome}" class="card-img" />
            </div>

            <div class="card-body">
                <h3 class="card-titulo">${projeto.nome}</h3>
                <p class="card-texto">
                    ${projeto.descricao}
                </p>
                <div class="card-tecnologias">
                    ${tecnologias}
                </div>
            </div>
            <div class="card-footer">
                ${footerButtons}
            </div>
        </div>
    `;
}

function getTecnologiaClass(tecnologia) {
    const classes = {
        'Laravel': 'laravel',
        'VueJS': 'vuejs',
        'MySql': 'mysql',
        'JWT': 'jwt',
        'API': 'api',
        'Html5': 'html',
        'Css3': 'css3',
        'Bootstrap': 'bootstrap',
        'Livewire': 'livewire',
        'php': 'php',
        'bootstrap': 'bootstrap'
    };

    return classes[tecnologia] || '';
}