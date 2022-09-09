const chk = document.querySelector('.humberger-menu')
const navbar = document.querySelector('.navbar')
chk.addEventListener('click',()=> {
    navbar.classList.toggle('humbergur-active')
})

const downArrow = document.getElementById('down-arrow')
const submenu = document.querySelector('.submenu')
const downArrowTwo = document.getElementById('down-arrow-2')
const submenuTwo = document.querySelector('.submenu-2')
downArrow.addEventListener('click',e => {
    submenu.classList.toggle('submenu-active')
})


downArrowTwo.addEventListener('click',e => {
    submenuTwo.classList.toggle('submenu-active')
})
