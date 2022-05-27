import './style.css';
import loadPage from './load.js';
import loadHomeTab from './home.js';
import loadMenuTab from './menu.js';

loadPage();
loadMenuTab();

/* Test Code. Removing the last child removes the current "tab"

const content = document.querySelector(".content");
content.removeChild(content.lastChild)


NOTE TO SELF : Change button underline in each tab's module (add the class)
*/