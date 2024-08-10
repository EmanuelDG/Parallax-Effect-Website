document.addEventListener('DOMContentLoaded', function() {
    function parallaxScroll() {
        var scrolled = window.scrollY;

        document.querySelector('.mars').style.transform = 'translateY(' + (scrolled * 0.1) + 'px)';
        document.querySelector('.jupiter').style.transform = 'translateY(' + (scrolled * 0.2) + 'px)';
        document.querySelector('.saturn').style.transform = 'translateY(' + (scrolled * 0.3) + 'px)';
        document.querySelector('.neptune').style.transform = 'translateY(' + (scrolled * 0.35) + 'px)'; 
        document.querySelector('.left-image').style.transform = 'rotate(' + (scrolled * 0.1) + 'deg)';
        document.querySelector('.right-image').style.transform = 'rotate(' + (-scrolled * 0.1) + 'deg)';
        //document.querySelector('.left-image2').style.transform = 'rotate(' + (scrolled * 0.1) + 'deg)';
    }

    
    window.addEventListener('scroll', parallaxScroll);

    parallaxScroll();

    function preventOverScrolling() {
        const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;

        if (window.scrollY > scrollableHeight) {
            window.scrollTo(0, scrollableHeight);
        }
    }

    window.addEventListener('scroll', preventOverScrolling);

});
