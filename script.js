
let hamburger = document.querySelector(".hamburger")

let close = document.querySelector(".close");

hamburger.addEventListener('click', () => {
    
    
    document.querySelector('.hidden-menu').style.width='40%';

    hamburger.style.display = "none";
    close.style.display = "block";

})


close.addEventListener('click', ()=>{
    
    document.querySelector('.hidden-menu').style.width='0';

    hamburger.style.display = "block";
    close.style.display = "none";
})