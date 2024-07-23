navToggle = document.getElementById("nav_toggle");
navMenu = document.getElementById("nav_menu");
navClose = document.getElementById("nav_close");
navLinks = document.querySelectorAll(".nav_link")
console.log(navLinks)
navToggle.addEventListener("click", ()=> {
    navMenu.classList.add('showMenu')
})
navClose.addEventListener("click", ()=> {
    navMenu.classList.remove("showMenu")
})
const linkAction = () => {
    navMenu = document.getElementById("nav_menu");
    navMenu.classList.remove("showMenu")
}
navLinks.forEach(n => n.addEventListener("click", linkAction));


const blurHeader = () => {
    const header = document.getElementById("header");
    this.scrollY >= 50 ? header.classList.add("blur-header")
                       : header.classList.remove("blur-header");
}
window.addEventListener("scroll", blurHeader)


const contactForm = document.getElementById("contact-form"),
      contactMessage = document.getElementById("contact-message")

const sendEmail = (e) => {
    e.preventDefault()
    emailjs.sendForm("service_w1f38x3", "template_2kd7dv7", "#contact-form", "6fDu52qrHBp_7CvpJ")
        .then(()=>{
            contactMessage.textContent = "Message sent successfully "
        }, () => {
            contactMessage.textContent = "Message not send (service errore) "
        })
}

contactForm.addEventListener("submit", sendEmail) 



const scrollUp = () => {
    const scrollUp = document.getElementById("scroll-up");
    this.scrollY >= 350 ? scrollUp.classList.add("show-scroll")
                        : scrollUp.classList.remove("show-scroll"); 
}

window.addEventListener("scroll", scrollUp)



const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
})

sr.reveal('.home_data, home_social, .contact_container, .footer_container')
sr.reveal('.home_image', {origin: 'bottom'})
sr.reveal('.about_data, .skills_data',  {origin: "left"})
sr.reveal('.about_image, .skills_content', {origin: "right"})
sr.reveal('.services_card, .project_card', {interval: 100})

