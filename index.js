// template_to0on8c
//service_0u85guk
// sPRqYsaLtXKqKQ1ZP

//background moving shapes
const scaleFactor = 1/20;
function moveBackground(event){
    const shapes = document.querySelectorAll(".shape");
    const x= event.clientX * scaleFactor;
    const y= event.clientY * scaleFactor;

    for(let i=0; i<shapes.length; i++){
        const isOdd= i % 2 !==0;
        const boolInt = isOdd ? -1 : 1;
        shapes[i].style.transform=`translate(${x * boolInt}px, ${y*boolInt}px)`
    }
}

//creating dark mode
let constrastToggle = false;
function toggleConstrast(){
    constrastToggle= !constrastToggle;
    if(constrastToggle) {
        document.body.classList += " dark-theme"
    }
    else{
     document.body.classList.remove("dark-theme");

    }
}



// sending email code 
function contact(event){ 
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading')
    const success= document.querySelector('.modal__overlay--success')
    loading.classList += " modal__overlay--visible";

    emailjs
        .sendForm(
            'service_0u85guk',
            'template_to0on8c',
            event.target,
            'sPRqYsaLtXKqKQ1ZP'
        ).then(() =>{
            loading.classList.remove("modal__overlay--visible");
        success.classList += " modal__overlay--visible";
        }).catch(()=> {
            loading.classList.remove("modal__overlay--visible");
            alert(
                "The email service is temporarily unavailable. Please contact me directly on s.alishasyed@gmail.com"
            );
        });
} 

let isModalOpen = false;
function toggleModal() {
    if(isModalOpen) {
        isModalOpen = false;
        return document.body.classList.remove("modal--open");
    }
    //toggle Modal
    // isModalOpen= !isModalOpen;
    isModalOpen= true;
    document.body.classList += " modal--open";
}