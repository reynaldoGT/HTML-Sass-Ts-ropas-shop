import "../scss/styles.scss";
//?Here go you ts code
//* import '../static/image.jpg';
//* import 'image.jpg';
import '../static/clothes.png';
import { enlaces, menuItem } from './menu'
const items_menu = document.querySelector('#items-menu'),

    cards = document.querySelectorAll('.card'),
    menu_drawer_menu = document.querySelector('#menu_drawer_menu');
// console.log(cards)

enlaces.forEach((item: menuItem) => {
    const span = document.createElement('span');
    span.classList.add('item-element')
    span.innerHTML += `
        <i class="${item.icon}"></i>
        <a href="">${item.title}</a>
    `;
    items_menu.appendChild(span);
})

cards.forEach(item => {
    item.addEventListener('mouseenter', e => {
        item.classList.add('active');
    })
    item.addEventListener('mouseleave', e => {
        item.classList.remove('active');
    })
})
console.log(menu_drawer_menu)

menu_drawer_menu.addEventListener('click', e => {
    
    document.querySelector('#dashboard').classList.toggle('active-drawer-navigation')
})