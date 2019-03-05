const animateHTML = () => {
    let elems;
    let windowHeight;
    
    const init = () => {
        elems = document.querySelectorAll('.hidden');
        windowHeight = window.innerHeight;
    }

    const checkPosition = () => {
        for (var i = 0; i < elems.length; i++) {
            var positionFromTop = elems[i].getBoundingClientRect().top;
            if (positionFromTop - windowHeight <= 0) {
                elems[i].className = elems[i].className.replace(
                    'hidden',
                    'fade-in-element'
                );
            }
        }
    }

    window.addEventListener('click', checkPosition);

    return {
        init: init
    };

    
};


animateHTML().init();