let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menu.onClick = () =>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open')
};
const sr =ScrollReveal({
    distance :'40px',
    duration:2500,
    reset:true
})

sr.reveal('.logo',{delay:200,origin:'left'});
sr.reveal('.navbar',{delay:400,origin:'top'});
sr.reveal('.menu-btn',{delay:520,origin:'right'});
sr.reveal('.home-text span',{delay:600,origin:'top'});
sr.reveal('.home-text h1',{delay:680,origin:'left'});
sr.reveal('.home-text p',{delay:750,origin :'right' });

sr.reveal('.main-btn',{delay:860,origin:'left'});
sr.reveal('.share',{delay:950,origin:'bottom'});
sr.reveal('.home-img',{delay:950,origin:'right'});

document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.section');
    let currentSectionIndex = 0;

    function handleUpClick() {
        if (currentSectionIndex > 0) {
            currentSectionIndex--;
            scrollToSection(currentSectionIndex);
        }
    }

    function handleDownClick() {
        if (currentSectionIndex < sections.length - 1) {
            currentSectionIndex++;
            scrollToSection(currentSectionIndex);
        }
    }

    function scrollToSection(index) {
        sections[index].scrollIntoView({
            behavior: 'smooth'
        });
    }
    const upArrow = document.querySelector('.arrow.up');
    const downArrow = document.querySelector('.arrow.down');
    upArrow.addEventListener('click', handleUpClick);
    downArrow.addEventListener('click', handleDownClick);
});
