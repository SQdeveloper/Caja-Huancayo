const buttonArrow = document.querySelectorAll(".slider .arrow");
const sliderMove  = document.querySelector(".sliderMove");
const numberCards = document.querySelectorAll(".slider .box");

buttonArrow[1].addEventListener("click", ()=>{
    let BoxLast = document.querySelectorAll(".slider .box")[numberCards.length - 1];
    sliderMove.style.transition = "transform .5s";
    sliderMove.style.transform = "translateX(-50%)";
    setTimeout(()=>{
        sliderMove.style.transition = "none";
        sliderMove.insertAdjacentElement("afterbegin", BoxLast);
        sliderMove.style.transform = "translateX(-25%)";
    }, 500);
});

buttonArrow[0].addEventListener("click", ()=>{
    let BoxFirst = document.querySelector(".slider .box");
    sliderMove.style.transition = "transform .5s";
    sliderMove.style.transform = "translateX(0%)";
    setTimeout(()=>{
        sliderMove.style.transition = "none";
        sliderMove.style.transform = "translateX(-25%)";
        sliderMove.insertAdjacentElement("beforeend", BoxFirst);
    }, 500);
});