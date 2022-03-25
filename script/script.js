const burgerMenu = () => {
    const burger = document.querySelector('.burgerMenu');
    const ul = document.querySelector('header ul');
    let burgerIcon = document.querySelector('.burgerMenu i');
    burger.addEventListener('click', () => {
        ul.classList.toggle('show')
        burgerIcon.classList.toggle('fa-bars')
        burgerIcon.classList.toggle('fa-xmark')
    })
}
burgerMenu();