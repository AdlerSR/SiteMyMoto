window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 80) {
        document.getElementById("navbar").style.padding = "7px 10px";
        document.getElementById("logo").style.width = "80px";
    } else {
        document.getElementById("navbar").style.padding = "10px 10px";
        document.getElementById("logo").style.width = "100px";
    }
}
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
