

var darkModeBtn = document.querySelector("#darkModeBtn");
darkModeBtn.addEventListener("click",()=>{
    let body = document.body
    body.classList.toggle("darkMode");
})


 var membersToggle =  document.querySelector("#membersToggle");
    membersToggle.addEventListener("click",()=>{
        let card = document.querySelectorAll(".card");
        card.forEach((it)=>{
            it.classList.toggle("cardShow");
        })
        

})


//  nav para change
// var nav = document.querySelector("nav");
// nav.addEventListener("mouseenter",()=>{
//     let flag = 0;
//     let tagLineElement =  document.querySelector(".tagLine");
//     tagLineElement.textContent = "UNIVERSAL CONVERTER";
// })
// nav.addEventListener("mouseleave",()=>{
//     let flag = 0;
//     let tagLineElement =  document.querySelector(".tagLine");
//     tagLineElement.textContent = "[ UNI CON ]";
// })

