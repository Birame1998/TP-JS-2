const btnmenu = document.querySelector('button');
const nav = document.querySelector('nav');
const nav_icons = document.querySelectorAll('.nav-icons');
const header_navEls= document.querySelectorAll('#header-nav');


nav_icons.forEach(nav_icon => {
    nav_icon.addEventListener('click',()=>{
            nav_icon.classList.toggle('active'); 
    });
});
window.addEventListener('click',e=>{
    if (e.target!==nav && e.target!==btnmenu) {
        nav.classList.remove('show-nav-complete');    
        btnmenu.classList.remove('btn-show-nav');
    }
});


 
nav.addEventListener('mouseover',()=>{
    nav.classList='show-nav-complete';
    btnmenu.className='btn-show-nav';
    // createCompleteMenu()
})


btnmenu.addEventListener('click',()=>{
        nav.classList.toggle('show-nav-complete');
        btnmenu.classList.toggle('btn-show-nav');
        // createCompleteMenu();
        
})








function createText(textContent,Contain) {
    const p = document.createElement('p');
    p.innerText=textContent;
    Contain.appendChild(p);
    return p;
}
function createIcon(iClass,Contain) {
    const i= document.createElement('i');
    i.className=iClass;
    Contain.appendChild();
    return i;
}

function createCompleteMenu(){
    createText('AdminLTE 3',header_navEls[0]);
    createText('Alexander Pierce',header_navEls[1]);
}

