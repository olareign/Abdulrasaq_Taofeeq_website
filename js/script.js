const checkBtn = document.querySelector('.checkbtn');
const navList = document.querySelector('.list');
const contactBtn = document.querySelector('.intro-btn');
const contactIcon = document.querySelector('.intro-contact__icon');

// let number = document.querySelector('#number');
// let counter = 0;

// setInterval(() => {
//     if(counter == 65){
//         clearInterval();
//     } else {
//         counter += 1;
//         number.innerHTML = counter + "%";
//     }
// }, 20)


const showlist = () => {
    if( navList.classList.contains('toggle') ){
        navList.classList.add('toggle')
    }
}
showlist;

checkBtn.addEventListener('click',() => {
    navList.classList.toggle('toggle');
})

contactBtn.addEventListener('click', () => {
   contactIcon.classList.toggle('toggle');
})



