const loadHomeTab = function() {
    const homeButton = document.querySelector(".home-button");
    const menuButton = document.querySelector(".menu-button");
    const contactButton = document.querySelector(".contact-button");
    homeButton.classList.add("active");
    menuButton.classList.remove("active");
    contactButton.classList.remove("active");

    const content = document.querySelector(".content");

    const homePage = document.createElement("div");
    homePage.setAttribute("id","home-page");
    
    const mainDiv = document.createElement("div");
    mainDiv.classList.add("main");
    
    const homeDiv = document.createElement("div");
    homeDiv.classList.add("home");
    const homeHead = document.createElement("h2");
    homeHead.textContent = "Lorem ipsum dolor sit amet.";
    const homeP1 = document.createElement("p");
    homeP1.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit.";
    const homeP2 = document.createElement("p");
    homeP2.textContent = "Lorem ipsum dolor sit.";
    
    const testDiv = document.createElement("div");
    testDiv.classList.add("testimonials");
    const quoteDiv1 = document.createElement("div");
    quoteDiv1.classList.add("quote");
    const block1 = document.createElement("blockquote");
    block1.textContent = `"It's better than delivery!"`;
    const quoteP1 = document.createElement("p");
    quoteP1.textContent = "- Jacqueline R.";
    const quoteDiv2 = document.createElement("div");
    quoteDiv2.classList.add("quote");
    const block2 = document.createElement("blockquote");
    block2.textContent = `"Dang."`;
    const quoteP2 = document.createElement("p");
    quoteP2.textContent = "- Michael S.";
    
    homeDiv.append(homeHead);
    homeDiv.append(homeP1);
    homeDiv.append(homeP2);
    mainDiv.append(homeDiv);
    
    quoteDiv1.append(block1);
    quoteDiv1.append(quoteP1);
    quoteDiv2.append(block2);
    quoteDiv2.append(quoteP2);
    testDiv.append(quoteDiv1);
    testDiv.append(quoteDiv2);
    
    homePage.append(mainDiv);
    homePage.append(testDiv);
    
    content.append(homePage);
};

export default loadHomeTab;
