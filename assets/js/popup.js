const checkButton = document.getElementById('checkButton');
const httpsCheckbox = document.getElementById('httpsCheckbox');
const resultElement = document.getElementById('result');
const optionsButton = document.getElementById('optionsButton');

optionsButton.addEventListener('click', () => {
    chrome.runtime.openOptionsPage();
});

checkButton.addEventListener('click', () => {
    // Pega a lista de SITES (objetos) salvos pelo usuário
    chrome.storage.local.get({ safeSites: [] }, (data) => {
        const safeSites = data.safeSites;

        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            const currentTab = tabs[0];
            
            resultElement.textContent = "";
            resultElement.className = '';
            
            if (currentTab && currentTab.url) {
                const url = currentTab.url;

                const isHttps = url.startsWith('https://');
                httpsCheckbox.checked = isHttps;

                // A verificação agora checa a propriedade 'url' de cada objeto 'site'
                const isSafe = safeSites.some(site => url.startsWith(site.url));
                
                resultElement.classList.add('visible');

                if (isSafe) {
                    resultElement.textContent = "Este site está na sua lista de seguros!";
                    resultElement.classList.add('safe');
                } else {
                    resultElement.textContent = "Este site não está na sua lista.";
                    resultElement.classList.add('unsafe');
                }
            } else {
                resultElement.textContent = "Não foi possível acessar a URL.";
                resultElement.classList.add('visible');
            }
        });
    });
});