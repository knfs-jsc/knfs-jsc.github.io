let prevScrollpos = window.pageYOffset || document.documentElement.scrollTop;
let navbar = document.getElementById("navbar");
let navbarHeight = navbar.offsetHeight;

window.addEventListener("scroll", function() {
    let currentScrollPos = window.pageYOffset || document.documentElement.scrollTop;

    if (prevScrollpos > currentScrollPos) {
        navbar.style.top = "0";
        navbar.style.transition = "top 0.3s ease-in-out";
    } else {
        navbar.style.top = "-" + navbarHeight + "px";
        navbar.style.transition = "top 0.3s ease-in-out";
    }

    prevScrollpos = currentScrollPos;
});
