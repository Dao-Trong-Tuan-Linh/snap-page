const itemMenu=document.querySelector('.item-menu')
const itemMenu2=document.querySelector('.item-menu_2')
const menuPhone=document.querySelector('.menuPhone')
const menu=document.querySelector('.menu')
const subMenu=document.querySelector('.list-item--secondary')
const subMenu2=document.querySelector('.list-item--secondary_2')
const arrow = document.querySelectorAll('.arrow')
const body=document.querySelector('.body')
const change=document.querySelector('.change')

menuPhone.onclick = () => {
    showMenu(menu,change)
}

itemMenu.onclick= (e) => {
    showMenu(subMenu,arrow[0])
}

itemMenu2.onclick = (e) => {
    showMenu(subMenu2,arrow[1])
}




function showMenu(menu,arrow) {
    menu.classList.toggle('active')
    arrow.setAttribute('src','images/icon-arrow-up.svg')
    const containsActive=menu.classList.contains('active')
    if(!containsActive) {
        arrow.setAttribute('src', 'images/icon-arrow-down.svg')
    }
    if(arrow===change && containsActive) 
    {
        arrow.setAttribute('src','images/icon-close-menu.svg')
        body.classList.add('expanded')
    }
    else if(arrow===change && !containsActive)
    {
        arrow.setAttribute('src','images/icon-menu.svg')
        body.classList.remove('expanded')
    }

}