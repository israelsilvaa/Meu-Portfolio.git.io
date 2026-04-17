# Sistema de Temas do Portfólio

## Como usar

### Método 1: Interface Visual (Recomendado)
1. Abra o portfólio no navegador
2. Na barra de navegação, você verá 3 botões coloridos:
   - 🟣 **Roxo** - Tema padrão
   - 🔴 **Vermelho** - Tema alternativo
   - 🔵 **Azul** - Tema alternativo
3. Clique no botão da cor desejada para trocar o tema
4. O tema selecionado será salvo automaticamente

### Método 2: Arquivo de Configuração
Edite o arquivo `assets/css/temas.css`:

```css
:root {
    /* SELECIONE O TEMA AQUI: purple, red ou blue */
    --tema-ativo: purple;  /* Mude para red ou blue */
    ...
}
```

## Temas Disponíveis

### 1. Tema Roxo (Padrão)
- Cor principal: `#9d00ff`
- Cor secundária: `#b84dff`
- Acento: `rgba(157, 0, 255, 0.3)`

### 2. Tema Vermelho
- Cor principal: `#e63946`
- Cor secundária: `#ff6b6b`
- Acento: `rgba(230, 57, 70, 0.3)`

### 3. Tema Azul
- Cor principal: `#0066cc`
- Cor secundária: `#3399ff`
- Acento: `rgba(0, 102, 204, 0.3)`

## Como Adicionar Novos Temas

Para adicionar um novo tema, edite o arquivo `assets/css/temas.css`:

1. Adicione as variáveis do novo tema:
```css
/* Seu Novo Tema */
--tema-seutema-primary: #sua-cor;
--tema-seutema-secondary: #sua-cor-clara;
--tema-seutema-accent: rgba(sua-cor, 0.3);
--tema-seutema-light: rgba(sua-cor, 0.1);
```

2. Adicione o seletor de tema:
```css
[data-theme="seutema"] {
    --theme-color: var(--tema-seutema-primary);
    --theme-color-light: var(--tema-seutema-secondary);
    --theme-accent: var(--tema-seutema-accent);
    --theme-light-bg: var(--tema-seutema-light);
}
```

3. Adicione o botão no HTML:
```html
<button class="theme-btn" data-theme="seutema" title="Seu Tema"></button>
```

4. Adicione o estilo do botão no CSS:
```css
.theme-btn[data-theme="seutema"] {
    background: linear-gradient(135deg, #sua-cor 0%, #sua-cor-clara 100%);
}
```

## Variáveis de Cores do Sistema

O sistema usa estas variáveis CSS que são atualizadas automaticamente:

- `--theme-color` - Cor principal do tema
- `--theme-color-light` - Versão mais clara da cor principal
- `--theme-accent` - Cor para sombras e efeitos
- `--theme-light-bg` - Cor para fundos sutis

## Persistência

O tema selecionado é salvo automaticamente no `localStorage` do navegador, então a preferência do usuário será mantida entre visitas.