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

//     window.addEventListener('click', (e) => {
//         console.log(e);
//     });

//     return {
//         init: init
//     };

    
// };

// window.addEventListener('scroll', (e) => {
//     console.log(e);
// });

// animateHTML().init();

const slideOne = document.querySelector('#slide1');
const navLinks = document.querySelectorAll('.navlist');

const slideToView = (slideElement) => {
    slideElement.scrollIntoView({ behavior: 'smooth' });
};

navLinks.forEach(navLink => {
    navLink.addEventListener('click', (e) => {
        const slide = e.target.dataset.slide;
        const slideElement = document.getElementById(slide);
        slideToView(slideElement);
        e.preventDefault();
    });
});



// const closeMenu = document.querySelector('.closeframe');
// const openMenu = document.querySelector('.openframe');
// const bookingPopup = document.querySelector('.booking-popup');


// openMenu.addEventListener('click', () => {
//     bookingPopup.classList.add('visible');
// });

// closeMenu.addEventListener('click', () => {
//     bookingPopup.classList.remove('visible');
// });