let nav = document.getElementById('nav');
window.onscroll = function () { scrollNav() };

function scrollNav() {
    if (window.scrollY > 30) {
        nav.classList.remove('py-4');
    } else {
        nav.classList.add('py-4');
    }
}

