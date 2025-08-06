function menuOpen() {
    let menuHamburguer = document.querySelector('.menuMobile');
    if (menuHamburguer.classList.contains('open')) {
        menuHamburguer.classList.remove('open');
     
    } else {
        menuHamburguer.classList.add('open')
    }
}

