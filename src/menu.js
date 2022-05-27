const loadMenuTab = function() {

    const content = document.querySelector(".content");

    const menuPage = document.createElement("div");
    menuPage.setAttribute("id","menu-page");
    
    const mainDiv = document.createElement("div");
    mainDiv.classList.add("main");
    
    const menuDiv = document.createElement("div");
    menuDiv.classList.add("home");
    
    const breakfastHead = document.createElement("h2");
    breakfastHead.textContent = "Breakfast"
    const lunchHead = document.createElement("h2");
    lunchHead.textContent = "Lunch"
    const dinnerHead = document.createElement("h2");
    dinnerHead.textContent = "Dinner"
    
    /* Monte Cristo */
    const monteItem = document.createElement("div");
    monteItem.classList.add("menu-item");
    const monteSide1 = document.createElement("div");
    const monteSide2 = document.createElement("div");
    monteSide1.classList.add("item-side");
    monteSide2.classList.add("item-side");
    const monteImg = document.createElement("img");
    monteImg.src = "./images/monte.jpg";
    monteImg.alt = "Monte Cristo";
    const monteHead = document.createElement("h3");
    monteHead.textContent = "Monte Cristo";
    const monteP = document.createElement("p");
    monteP.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus sit tempore earum.";
    
    monteSide1.append(monteImg);
    monteSide2.append(monteHead);
    monteSide2.append(monteP);
    monteItem.append(monteSide1);
    monteItem.append(monteSide2);
    
    /* Append all */
    
    menuDiv.append(breakfastHead);
    menuDiv.append(monteItem);
    
    mainDiv.append(menuDiv);
    menuPage.append(mainDiv);
    content.append(menuPage);
}

export default loadMenuTab;