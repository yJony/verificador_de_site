const nicknameInput = document.getElementById('nicknameInput');
const urlInput = document.getElementById('urlInput');
const addButton = document.getElementById('addButton');
const urlList = document.getElementById('urlList');

// Carrega e exibe a lista de objetos {nickname, url}
function loadUrls() {
    chrome.storage.local.get({ safeSites: [] }, (data) => {
        urlList.innerHTML = ''; // Limpa a lista
        data.safeSites.forEach((site, index) => {
            const li = document.createElement('li');
            li.innerHTML = `
                <div class="url-info">
                    <span class="nickname">${site.nickname}</span>
                    <span class="full-url">${site.url}</span>
                </div>
                <button class="delete-btn" data-index="${index}">Remover</button>
            `;
            urlList.appendChild(li);
        });
    });
}

// Adiciona um novo site (objeto) ao armazenamento
addButton.addEventListener('click', () => {
    const nickname = nicknameInput.value.trim();
    const url = urlInput.value.trim();

    if (nickname && url) {
        const newSite = { nickname, url };
        chrome.storage.local.get({ safeSites: [] }, (data) => {
            const updatedSites = data.safeSites;
            updatedSites.push(newSite);
            chrome.storage.local.set({ safeSites: updatedSites }, () => {
                nicknameInput.value = '';
                urlInput.value = '';
                loadUrls();
            });
        });
    } else {
        alert("Por favor, preencha o apelido e a URL.");
    }
});

// Remove um site da lista pelo seu índice
urlList.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete-btn')) {
        const indexToRemove = parseInt(e.target.dataset.index, 10);
        chrome.storage.local.get({ safeSites: [] }, (data) => {
            const updatedSites = data.safeSites;
            updatedSites.splice(indexToRemove, 1);
            chrome.storage.local.set({ safeSites: updatedSites }, loadUrls);
        });
    }
});

document.addEventListener('DOMContentLoaded', loadUrls);