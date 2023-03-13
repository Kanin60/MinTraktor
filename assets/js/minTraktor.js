//GLOBALE VARIABLER
let myFadeImages = document.getElementsByClassName('fadeImg');

//ENTRY POINT
//Skifter til class 
window.addEventListener('load', (e)=>{
    e.preventDefault();
    console.log('loaded');
    for (const myElement of myFadeImages){
        myElement.classList.toggle('showImg');
    };
});