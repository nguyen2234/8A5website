var rp = document.querySelector('.container')
function responsive_iframe() {
    if (window.innerWidth <= 500) {
        rp.style = "height: 800px !important;"
    }
    else {
        rp.style = ''
    }
}
setInterval( responsive_iframe, 1)