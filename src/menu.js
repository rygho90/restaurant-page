const loadMenuTab = function() {

    const content = document.querySelector(".content");

    const menuPage = document.createElement("div");
    menuPage.setAttribute("id","menu-page");
    
    const mainDiv = document.createElement("div");
    mainDiv.classList.add("main");
    
    const menuDiv = document.createElement("div");
    menuDiv.classList.add("menu");
    
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
    monteImg.src = "images/monte.jpg";
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

    /* French Toast */
    const toastItem = document.createElement("div");
    toastItem.classList.add("menu-item");
    const toastSide1 = document.createElement("div");
    const toastSide2 = document.createElement("div");
    toastSide1.classList.add("item-side");
    toastSide2.classList.add("item-side");
    const toastImg = document.createElement("img");
    toastImg.src = "images/toast.JPG";
    toastImg.alt = "French Toast";
    const toastHead = document.createElement("h3");
    toastHead.textContent = "French Toast";
    const toastP = document.createElement("p");
    toastP.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus sit tempore earum.";
    
    toastSide1.append(toastHead);
    toastSide1.append(toastP);
    toastSide2.append(toastImg);
    toastItem.append(toastSide1);
    toastItem.append(toastSide2);

    /* Pizza */
    const pizzaItem = document.createElement("div");
    pizzaItem.classList.add("menu-item");
    const pizzaSide1 = document.createElement("div");
    const pizzaSide2 = document.createElement("div");
    pizzaSide1.classList.add("item-side");
    pizzaSide2.classList.add("item-side");
    const pizzaImg = document.createElement("img");
    pizzaImg.src = "images/pizza.jpg";
    pizzaImg.alt = "Pizza";
    const pizzaHead = document.createElement("h3");
    pizzaHead.textContent = "Chicken Bacon Pesto Pizza";
    const pizzaP = document.createElement("p");
    pizzaP.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus sit tempore earum.";
    
    pizzaSide1.append(pizzaImg);
    pizzaSide2.append(pizzaHead);
    pizzaSide2.append(pizzaP);
    pizzaItem.append(pizzaSide1);
    pizzaItem.append(pizzaSide2);

    /* Burger */
    const burgerItem = document.createElement("div");
    burgerItem.classList.add("menu-item");
    const burgerSide1 = document.createElement("div");
    const burgerSide2 = document.createElement("div");
    burgerSide1.classList.add("item-side");
    burgerSide2.classList.add("item-side");
    const burgerImg = document.createElement("img");
    burgerImg.src = "images/burger.jpg";
    burgerImg.alt = "Burger";
    const burgerHead = document.createElement("h3");
    burgerHead.textContent = "Bison Burger";
    const burgerP = document.createElement("p");
    burgerP.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus sit tempore earum.";
    
    burgerSide1.append(burgerHead);
    burgerSide1.append(burgerP);
    burgerSide2.append(burgerImg);
    burgerItem.append(burgerSide1);
    burgerItem.append(burgerSide2);

    /* Chicken */
    const chickItem = document.createElement("div");
    chickItem.classList.add("menu-item");
    const chickSide1 = document.createElement("div");
    const chickSide2 = document.createElement("div");
    chickSide1.classList.add("item-side");
    chickSide2.classList.add("item-side");
    const chickImg = document.createElement("img");
    chickImg.src = "images/chicken.jpg";
    chickImg.alt = "Chicken Fettuccine";
    const chickHead = document.createElement("h3");
    chickHead.textContent = "Chicken Fettuccine";
    const chickP = document.createElement("p");
    chickP.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus sit tempore earum.";
    
    chickSide1.append(chickImg);
    chickSide2.append(chickHead);
    chickSide2.append(chickP);
    chickItem.append(chickSide1);
    chickItem.append(chickSide2);

    /* Steak */
    const steakItem = document.createElement("div");
    steakItem.classList.add("menu-item");
    const steakSide1 = document.createElement("div");
    const steakSide2 = document.createElement("div");
    steakSide1.classList.add("item-side");
    steakSide2.classList.add("item-side");
    const steakImg = document.createElement("img");
    steakImg.src = "images/steak.jpg";
    steakImg.alt = "Steak";
    const steakHead = document.createElement("h3");
    steakHead.textContent = "Steak and Asaparagus";
    const steakP = document.createElement("p");
    steakP.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus sit tempore earum.";
    
    steakSide1.append(steakHead);
    steakSide1.append(steakP);
    steakSide2.append(steakImg);
    steakItem.append(steakSide1);
    steakItem.append(steakSide2);
    
    /* Append all */
    
    menuDiv.append(breakfastHead);
    menuDiv.append(monteItem);
    menuDiv.append(toastItem);
    menuDiv.append(lunchHead);
    menuDiv.append(pizzaItem);
    menuDiv.append(burgerItem);
    menuDiv.append(dinnerHead);
    menuDiv.append(chickItem);
    menuDiv.append(steakItem);
    
    mainDiv.append(menuDiv);
    menuPage.append(mainDiv);
    content.append(menuPage);
}

export default loadMenuTab;