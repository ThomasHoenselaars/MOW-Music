// const animateHTML = () => {
//     let elems;
//     let windowHeight;
    
//     const init = () => {
//         elems = document.querySelectorAll('.hidden');
//         windowHeight = window.innerHeight;
//     }

//     const checkPosition = () => {
//         for (var i = 0; i < elems.length; i++) {
//             var positionFromTop = elems[i].getBoundingClientRect().top;
//             if (positionFromTop - windowHeight <= 0) {
//                 elems[i].className = elems[i].className.replace(
//                     'hidden',
//                     'fade-in-element'
//                 );
//             }
//         }
//     }

//     window.addEventListener('click', checkPosition);

//     return {
//         init: init
//     };

    
// };


// animateHTML().init();

// const slideOne = document.querySelector('#slide1');
// const navLinks = document.querySelectorAll('.navlist');
// console.log(navLinks);

// const slideToView = () => {
//     slideOne.scrollIntoView({ behavior: 'smooth' });
// };

// navLinks.forEach(navLink => {
//     console.log(navLink);
// });

// const closeMenu = document.querySelector('.closeframe');
// const openMenu = document.querySelector('.openframe');
// const bookingPopup = document.querySelector('.booking-popup');


// openMenu.addEventListener('click', () => {
//     bookingPopup.classList.add('visible');
// });

// closeMenu.addEventListener('click', () => {
//     bookingPopup.classList.remove('visible');
// });