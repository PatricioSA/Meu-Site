const menuButton = document.getElementById('menu-button')
menuButton.addEventListener('click', toggleMenu)

function toggleMenu() {
    document.querySelector('.mobile-nav').classList.toggle('active')
}