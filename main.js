console.log(2343);

let menuBar = document.getElementById("menuBar")
let mobileMenu = document.getElementById("mobile_menu");
let barMenu = document.getElementById("bar")
let crossBarMenu = document.getElementsByClassName("crossBar")
let moboLink = document.querySelectorAll(".moboNav")

// MENUBARS

menuBar.addEventListener("click", (e)=>{
    // toggle menu items
    mobileMenu.classList.toggle("show");
    // changeMenu bar to cross
    barMenu.classList.toggle("fa-times")
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


// SERVICES

// let serviceInfoBtn = document.getElementById("serviceInfo");
let serviceInfoBtn = document.querySelectorAll("#serviceInfo");
let serviceDetails = document.getElementById("serviceDetails");
let removeServiceDetails = document.getElementById("removeServiceDetails");



serviceInfoBtn.forEach(infoBtn => {
    infoBtn.addEventListener("click", ()=>{
        document.getElementById("serviceDetails").style.transform = "translateY(-320px)"
    })
})

removeServiceDetails.addEventListener("click", ()=>{
    serviceDetails.style.transform = "translateY(0px)"
    console.log(234)
})




// FORM

let contactForm = document.getElementById("contactform")
let userName = document.getElementById("username")
let userNameError = document.getElementById("nameError")
let userNameTrue = document.getElementById("nameTrue")


userName.addEventListener("", ()=>{
    console.log(83)

    console.log(userName.value)


})

contactForm.addEventListener("submit", (e)=>{

    console.log(44)

    e.preventDefault()
    // username Checker

    if(userName.value == ""){
        userNameError.style.display = "block"
        userNameTrue.style.display = "hidden"
    } else{
        userName.style.display = "hidden"
        userNameTrue.style.display = "block"
    }
})

// CONTACT AND BOOKING FORM

let imgContact = document.getElementById("imgContact");
let bookSession = document.getElementById("bookSession");
let contactRequestBtn = document.getElementById("contactRequestBtn");