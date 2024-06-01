// script.js

let tabCount = 1;
let titleCount = 1;

function openTab(evt, tabName) {
    const tabContents = document.getElementsByClassName("tab-content");
    for (let i = 0; i < tabContents.length; i++) {
        tabContents[i].style.display = "none";
    }
    
    const tabs = document.getElementsByClassName("tab");
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].className = tabs[i].className.replace(" active", "");
    }
    
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

function addTab() {
    tabCount++;
    const newTab = document.createElement("div");
    newTab.className = "tab";
    newTab.innerHTML = `Tab ${tabCount}`;
    newTab.setAttribute("onclick", `openTab(event, 'tab-${tabCount}')`);
    
    document.getElementById("add-tab").insertAdjacentElement('beforebegin', newTab);
    
    const newTabContent = document.createElement("div");
    newTabContent.className = "tab-content";
    newTabContent.id = `tab-${tabCount}`;
    newTabContent.innerHTML = `<h2>Content for Tab ${tabCount}</h2>`;
    
    document.querySelector(".content-pane").appendChild(newTabContent);
}

function addTitle() {
    titleCount++;
    const newTitle = document.createElement("li");
    newTitle.innerHTML = `Title ${titleCount}`;
    newTitle.setAttribute("onclick", `addSubtitle(this)`);
    
    document.getElementById("title-list").appendChild(newTitle);
}

function addSubtitle(titleElement) {
    const subtitleCount = titleElement.querySelectorAll('ul li').length + 1;
    
    if (!titleElement.querySelector('ul')) {
        const subtitleList = document.createElement("ul");
        titleElement.appendChild(subtitleList);
    }
    
    const subtitleList = titleElement.querySelector('ul');
    const newSubtitle = document.createElement("li");
    newSubtitle.innerHTML = `Subtitle ${subtitleCount}`;
    
    subtitleList.appendChild(newSubtitle);
}
