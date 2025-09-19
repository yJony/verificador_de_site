const checkButton = document.getElementById('checkButton');
const httpsCheckbox = document.getElementById('httpsCheckbox');
const resultElement = document.getElementById('result');
const optionsButton = document.getElementById('optionsButton');

optionsButton.addEventListener('click', () => {
    chrome.runtime.openOptionsPage();
});

checkButton.addEventListener('click', () => {
    chrome.storage.local.get({ safeSites: [] }, (data) => {
        const safeSites = data.safeSites;

        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            const currentTab = tabs[0];
            
            resultElement.textContent = "";
            resultElement.className = '';
            
            if (currentTab && currentTab.url) {
                const url = currentTab.url;

                // Não faz sentido checar sites internos do Chrome ou páginas em branco
                if (!url.startsWith('http')) {
                    resultElement.textContent = "Esta não é uma página da web verificável.";
                    resultElement.classList.add('visible');
                    return;
                }

                const isHttps = url.startsWith('https://');
                httpsCheckbox.checked = isHttps;

                // --- LÓGICA DE VERIFICAÇÃO APRIMORADA ---
                try {
                    // Pega a "origem" (protocolo + domínio) da aba atual
                    const currentOrigin = new URL(url).origin;

                    // Verifica se a origem da aba atual corresponde à origem de algum site na lista
                    const isSafe = safeSites.some(site => {
                        try {
                            // Extrai a origem do site salvo na lista
                            const savedOrigin = new URL(site.url).origin;
                            return currentOrigin === savedOrigin;
                        } catch (e) {
                            // Ignora URLs inválidas que o usuário possa ter salvo
                            console.warn("URL inválida na lista de segurança:", site.url);
                            return false;
                        }
                    });

                    resultElement.classList.add('visible');

                    if (isSafe) {
                        resultElement.textContent = "Este site está na sua lista de seguros!";
                        resultElement.classList.add('safe');
                    } else {
                        resultElement.textContent = "Este site não está na sua lista.";
                        resultElement.classList.add('unsafe');
                    }
                } catch (e) {
                    resultElement.textContent = "URL da página atual é inválida.";
                    resultElement.classList.add('visible');
                }
                
            } else {
                resultElement.textContent = "Não foi possível acessar a URL.";
                resultElement.classList.add('visible');
            }
        });
    });
});