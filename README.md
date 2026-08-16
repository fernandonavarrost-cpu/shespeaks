# She Speaks — Inglês Online para Mulheres

Landing page da **She Speaks**: curso de inglês online, individual ou em grupos pequenos, pensado para mulheres. Feita pela professora Michelle.

## Funcionalidades

- **Hero** de abertura com chamada para ação
- **Sobre** a professora Michelle com foto e missão
- **Como funciona** — os 3 passos do método (formato, plataforma e aulas ao vivo)
- **Diferenciais** — 6 motivos para escolher a She Speaks
- **Depoimentos** — feedback de alunas
- **Contato** — botões de WhatsApp e Instagram
- **Menu responsivo** (mobile com hambúrguer) em JavaScript vanilla

## Tecnologias

- HTML5
- CSS3 (Flexbox, Grid e media queries responsivas)
- JavaScript (vanilla)
- Google Fonts: Playfair Display e Poppins

## Estrutura do projeto

```
shespeaks/
├── index.html              # Página única com todas as seções
├── README.md
└── public/
    ├── css/
    │   └── style.css       # Todos os estilos do projeto
    ├── js/
    │   └── script.js       # Interações do menu mobile
    └── image/
        └── foto_mi.jpeg    # Foto da professora
```

## Como executar

Projeto estático, sem dependências ou build. Basta abrir o `index.html` no navegador.

## Como personalizar

- **Número do WhatsApp**: em `index.html`, na seção de contato, substitua `https://wa.me/` pelo número completo, ex.: `https://wa.me/55XXXXXXXXXXX`.
- **Instagram**: o link para `@teachermi_` também está na seção de contato do `index.html`.
- **Foto da professora**: substitua o arquivo `public/image/foto_mi.jpeg` mantendo o mesmo nome.
- **Cores e tipografia**: ajuste as cores e fontes em `public/css/style.css`.