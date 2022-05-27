import './style.css';
import loadPage from './load.js';
import loadHomeTab from './home.js';
import loadMenuTab from './menu.js';
import loadContactTab from './contact.js';

loadPage();
loadHomeTab();

const homeButton = document.querySelector(".home-button");
const menuButton = document.querySelector(".menu-button");
const contactButton = document.querySelector(".contact-button");

homeButton.addEventListener("click", () => {
    const content = document.querySelector(".content");
    content.removeChild(content.lastChild);
    loadHomeTab();
})

menuButton.addEventListener("click", () => {
    const content = document.querySelector(".content");
    content.removeChild(content.lastChild);
    loadMenuTab();
})

contactButton.addEventListener("click", () => {
    const content = document.querySelector(".content");
    content.removeChild(content.lastChild);
    loadContactTab();
})

/* Test Code. Removing the last child removes the current "tab"

const content = document.querySelector(".content");
content.removeChild(content.lastChild)

*/