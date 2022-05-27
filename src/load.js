const loadPage = function() {
    const content = document.querySelector(".content");
    const header = document.createElement("div");
    header.classList.add("header");
    
    const restaurantName = document.createElement("h1");
    restaurantName.classList.add("restaurant-name");
    restaurantName.textContent = "Ryan's Kitchen";
    
    const nav = document.createElement("nav");
    const homeButton = document.createElement("button");
    const menuButton = document.createElement("button");
    const contactButton = document.createElement("button");
    homeButton.textContent = "Home";
    menuButton.textContent = "Menu";
    contactButton.textContent = "Contact";
    homeButton.classList.add("button-nav");
    homeButton.classList.add("active");
    menuButton.classList.add("button-nav");
    contactButton.classList.add("button-nav");
    
    nav.append(homeButton);
    nav.append(menuButton);
    nav.append(contactButton);
    header.append(restaurantName);
    header.append(nav);
    content.append(header);
    
    /* Footer */
    
    const footer = document.createElement("footer");
    footer.classList.add(".footer");
    const footerP = document.createElement("p");
    footerP.textContent = "Copyright © 2022 Ryan Holland";
    footer.append(footerP);
    content.append(footer);
}

export default loadPage;