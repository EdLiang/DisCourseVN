function parallex() {
    ypos = window.pageYOffset;
    image = document.getElementById('parallex');
    image.style.top = ypos * -0.7 + 'px';
}
window.addEventListener('scroll', parallex);