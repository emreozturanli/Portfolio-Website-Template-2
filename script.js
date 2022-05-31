
let hamburger = document.querySelector(".hamburger")
let close = document.querySelector(".close");

hamburger.addEventListener('click', () => {

    document.querySelector('.hidden-menu').classList.toggle('show');

    if(hamburger.innerHTML == '<i class="fa-solid fa-x "></i>'){
        hamburger.innerHTML = '<i class="fa-solid fa-bars "></i>';
    }else{
        hamburger.innerHTML = '<i class="fa-solid fa-x "></i>';
    }
})

window.addEventListener('resize', ()=>{
    if(window.innerWidth > 850){
        document.querySelector('.hidden-menu').classList.remove('show');
        hamburger.innerHTML = '<i class="fa-solid fa-bars "></i>';
    }
    
})
/* BoundingClientRect */

let elements = document.querySelectorAll('.grid-item');


window.addEventListener('scroll', function(){

    elements.forEach(element => {
        if(element.getBoundingClientRect().top < window.innerHeight - 150){
                element.classList.add('fade-right');
            }
    })
    
})

let texts = document.querySelectorAll('.project-text');


window.addEventListener('scroll', function(){

    texts.forEach(text => {
        if(text.getBoundingClientRect().top < window.innerHeight - 150){
                text.classList.add('fade-top');
            }
    })
    
})

let images = document.querySelectorAll('.project-image');


window.addEventListener('scroll', function(){

    images.forEach(image => {
        if(image.getBoundingClientRect().top < window.innerHeight - 150){
                image.classList.add('fade-bottom');
            }
    })
    
})
