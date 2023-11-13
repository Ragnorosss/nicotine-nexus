import './global.scss';
import './slider';
import './popup'
import './popup-age'
const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', (e) => {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};
document.addEventListener("DOMContentLoaded", function () {
    var logo = document.getElementById("logo");

    logo.addEventListener("click", function (e) {
        e.preventDefault();
        scrollToTop(1000);
    });
});

function scrollToTop(duration) {
    var start = window.scrollY;
    var startTime = null;

    function easeInOutQuad(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    function scrollStep(timestamp) {
        if (!startTime) startTime = timestamp;
        var progress = timestamp - startTime;
        if (progress < duration) {
            var scrollY = easeInOutQuad(progress, start, -start, duration);
            window.scrollTo(0, scrollY);
            requestAnimationFrame(scrollStep);
        } else {
            window.scrollTo(0, 0);
        }
    }

    requestAnimationFrame(scrollStep);
}
const burgerIcon = document.querySelector('.burger-icon');
const menu = document.querySelector('.menu');

burgerIcon.addEventListener('click', () => {
    menu.classList.toggle('open');
});