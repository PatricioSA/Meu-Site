const menuButton = document.getElementById('menu-button')
menuButton.addEventListener('click', toggleMenu)
console.log(menuButton)

function toggleMenu() {
    document.querySelector('.mobile-nav').classList.toggle('active')
}