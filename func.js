// scripts.js
document.addEventListener("DOMContentLoaded", () => {
    let tabCount = 1;
    const tabList = document.querySelector('.tab-list');
    const tabContent = document.querySelector('.tab-content');
    const addTabButton = document.querySelector('.add-tab');
    const addTitleButton = document.querySelector('.add-title');
    const titleList = document.querySelector('.title-list');

    addTabButton.addEventListener('click', () => {
        tabCount++;
        const newTab = document.createElement('div');
        newTab.classList.add('tab');
        newTab.textContent = `Tab ${tabCount}`;
        newTab.addEventListener('click', () => {
            tabContent.textContent = `Content for Tab ${tabCount}`;
        });
        tabList.insertBefore(newTab, addTabButton);
    });

    addTitleButton.addEventListener('click', () => {
        const title = prompt('Enter title:');
        if (title) {
            const titleElement = document.createElement('div');
            titleElement.classList.add('title');
            titleElement.textContent = title;

            const addSubtitleButton = document.createElement('button');
            addSubtitleButton.textContent = 'Add Subtitle';
            addSubtitleButton.addEventListener('click', () => {
                const subtitle = prompt('Enter subtitle:');
                if (subtitle) {
                    const subtitleElement = document.createElement('div');
                    subtitleElement.classList.add('subtitle');
                    subtitleElement.textContent = subtitle;
                    titleElement.appendChild(subtitleElement);
                }
            });

            titleElement.appendChild(addSubtitleButton);
            titleList.appendChild(titleElement);
        }
    });
});
