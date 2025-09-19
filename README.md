# Verificador de Site Seguro 🛡️

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![GitHub manifest version](https://img.shields.io/github/manifest-json/v/yjony/verificador_de_site)

Uma extensão para o Google Chrome que permite ao usuário verificar se o site atual está em uma lista pessoal de sites confiáveis, garantindo uma navegação mais segura.

## 📸 Demonstração

![Demonstração do Popup](assets/images/screenshot-popup.png)


## ✨ Funcionalidades

* **Verificação Instantânea:** Checa se a URL da página atual está na sua lista segura.
* **Lista Personalizável:** Adicione, visualize e remova sites da sua lista de confiança através de uma página de opções dedicada.
* **Indicador HTTPS:** Mostra claramente se o site atual utiliza uma conexão segura (HTTPS).
* **Interface Moderna:** Um design elegante com tema escuro, focado na usabilidade.
* **Persistência de Dados:** Suas URLs e apelidos são salvos de forma segura usando a API `chrome.storage`.
* **Atalho Rápido:** Acesse a página de opções diretamente por um atalho no popup da extensão.


## 🚀 Instalação e Uso Local

Para instalar esta extensão em seu navegador diretamente a partir do código-fonte, siga os passos abaixo.

### Método 1: Para Desenvolvedores (usando Git)

Este método é ideal se você deseja modificar o código.

1.  Certifique-se de ter o [Git](https://git-scm.com/) instalado.
2.  Clone este repositório para a sua máquina local:
    ```bash
    git clone https://github.com/yJony/verificador_de_site.git
    ```
3.  Após o clone, siga as instruções na seção "Carregando a Extensão no Chrome" abaixo.

### Método 2: Download Direto (Arquivo ZIP)

Este método é mais simples se você quer apenas instalar a extensão para testar.

1.  Vá para a página principal do repositório: [https://github.com/yjony/verificador-de-site](https://github.com/yjony/verificador-de-site)
2.  Clique no botão verde **`< > Code`**.
3.  No menu dropdown, clique em **"Download ZIP"**.
4.  Extraia o arquivo `.zip` em um local de sua preferência no seu computador.
5.  Siga as instruções na seção "Carregando a Extensão no Chrome" abaixo.


### Carregando a Extensão no Chrome

1.  Abra o Google Chrome e navegue até a URL `chrome://extensions`.
2.  No canto superior direito, ative a opção **"Modo de desenvolvedor"**.
3.  Clique no botão **"Carregar sem compactação"** que apareceu no canto superior esquerdo.
4.  Na janela que se abrir, selecione a pasta do projeto (`verificador-de-site`).
5.  Pronto! A extensão "Verificador de Site Seguro" aparecerá na sua lista e estará pronta para ser usada.


## 🛠️ Como Usar

1.  Clique no ícone **+** no canto superior esquerdo do popup para abrir a página de Opções.
2.  Na página de Opções, adicione um **Apelido** (ex: "Meu Banco") e a **URL** completa (ex: `https://www.meubanco.com.br`) do site que você confia.
3.  Quando estiver em um site, clique no ícone da extensão.
4.  Clique no botão **"Verificar Segurança"**.
5.  O resultado aparecerá, informando se o site está na sua lista e se ele usa HTTPS.


## 📁 Estrutura do Projeto

O projeto é organizado com uma clara separação de responsabilidades para facilitar a manutenção.
``` 
verificador-de-site/
├── assets/
│   ├── css/
│   ├── js/
│   └── images/
└── ... (arquivos html, json)
``` 
## 💻 Tecnologias Utilizadas

* HTML5
* CSS3
* JavaScript (ES6+)
* Chrome Extension APIs (Manifest V3)


## 📜 Licença

Este projeto está sob a licença MIT.
