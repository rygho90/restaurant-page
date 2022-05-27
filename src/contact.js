const loadContactTab = function() {
    const content = document.querySelector(".content");

    const contactPage = document.createElement("div");
    contactPage.setAttribute("id","menu-page");
    
    const mainDiv = document.createElement("div");
    mainDiv.classList.add("main");
    
    const contactHead = document.createElement("h2");
    contactHead.classList.add("contact-head");
    contactHead.textContent = "Contact Us";
    
    /* Ryan */
    const ryanItem = document.createElement("div");
    ryanItem.classList.add("contact-item");
    const ryanSide1 = document.createElement("div");
    const ryanSide2 = document.createElement("div");
    ryanSide1.classList.add("contact-side");
    ryanSide2.classList.add("contact-side");
    const ryanImg = document.createElement("img");
    ryanImg.src = "images/ryan.jpg";
    ryanImg.alt = "Ryan";
    const ryanHead = document.createElement("h3");
    const ryanP1 = document.createElement("p");
    const ryanP2 = document.createElement("p");
    const ryanP3 = document.createElement("p");
    ryanHead.textContent = "Ryan";
    ryanP1.textContent = "Manager / Head Chef";
    ryanP2.textContent = "(555) 555-5555";
    ryanP3.textContent = "ryan@ryanskitchen.com";
    
    ryanSide1.append(ryanImg);
    ryanSide2.append(ryanHead);
    ryanSide2.append(ryanP1);
    ryanSide2.append(ryanP2);
    ryanSide2.append(ryanP3);
    ryanItem.append(ryanSide1);
    ryanItem.append(ryanSide2);

    /* Isaiah */
    const catItem = document.createElement("div");
    catItem.classList.add("contact-item");
    const catSide1 = document.createElement("div");
    const catSide2 = document.createElement("div");
    catSide1.classList.add("contact-side");
    catSide2.classList.add("contact-side");
    const catImg = document.createElement("img");
    catImg.src = "images/cat.jpg";
    catImg.alt = "Isaiah";
    const catHead = document.createElement("h3");
    const catP1 = document.createElement("p");
    const catP2 = document.createElement("p");
    const catP3 = document.createElement("p");
    catHead.textContent = "Isaiah";
    catP1.textContent = "Assistant Chef / Taste Tester";
    catP2.textContent = "(555) 555-5555";
    catP3.textContent = "isaiah@ryanskitchen.com";
    
    catSide1.append(catHead);
    catSide1.append(catP1);
    catSide1.append(catP2);
    catSide1.append(catP3);
    catSide2.append(catImg);
    catItem.append(catSide1);
    catItem.append(catSide2);
    
    mainDiv.append(contactHead);
    mainDiv.append(ryanItem);
    mainDiv.append(catItem);
    
    contactPage.append(mainDiv);
    
    content.append(contactPage);
}

export default loadContactTab;