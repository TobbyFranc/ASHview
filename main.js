console.log(2343);

let menuBar = document.getElementById("menuBar")
let mobileMenu = document.getElementById("mobile_menu");
let barMenu = document.getElementsByClassName(".bar")
let crossBarMenu = document.getElementsByClassName("crossBar")
let moboLink = document.querySelectorAll(".moboNav")

menuBar.addEventListener("click", (e)=>{
    // toggle menu items
    mobileMenu.classList.toggle("show");
    // changeMenu bar to cross
    barMenu.style.display = "hidden";
    // crossBarMenu.style.display = "block"
})


// moboLink.forEach(mobo = ()=>{
//     mobileMenu.classList.remove("show")
// })





// FAQS

// let faqsIcon = document.querySelector('fa-plus')

let faqsAccordion = document.getElementsByClassName('faqsBox');

for (let i = 0; i < faqsAccordion.length; i++){
    faqsAccordion[i].addEventListener('click', function(){
        this.classList.toggle('active')
    })
    
}

// FAQS END