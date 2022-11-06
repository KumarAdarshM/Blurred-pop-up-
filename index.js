const containerEl = document.querySelector(".container");
const btnEl = document.querySelector(".btn");
const popupContanerEl = document.querySelector(".popup-container");
const closeIconEl = document.querySelector(".close-icon");

btnEl.addEventListener("click",()=>{
    containerEl.classList.add("active");
    popupContanerEl.classList.remove("active");
});

closeIconEl.addEventListener("click",()=>{
    containerEl.classList.remove("active");
    popupContanerEl.classList.add("active");
});