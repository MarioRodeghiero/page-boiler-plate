function scrollBanner() {
    var scrollPos;
    var headerText = document.querySelector('.container button  ');
    scrollPos = window.scrollY;

    if (scrollPos <= 800) {
        headerText.style.transform = "translateY(" + (-scrollPos / 3) + "px" + ")";
        headerText.style.opacity = 1 - (scrollPos / 800);
    }
}

window.addEventListener('scroll', scrollBanner);