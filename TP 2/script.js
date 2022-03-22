const btn_menu = document.querySelector('.btn-menu');
const nav = document.querySelector('nav');
const main_nav = document.querySelector('.main-nav');


function createMenu(firstIcon,text,badge,secondIcon){
    var nav_line = document.createElement('div');
    nav_line.className="nav-line";
    var icon = document.createElement('div');
    icon.className="icon";
    var text_badge_arrow = document.createElement('div');
    text_badge_arrow.className="text-badge-arrow";

// *********************************************************************

    var i1 = document.createElement('i');
    i1.className=firstIcon;
    var span1 = document.createElement('span');
    span1.innerText=text;
    span1.className='text';
    var span2 = document.createElement('span');
    span2.innerText=badge;
    span2.className='badge';
    var span3 = document.createElement('span');
    span3.className='arrow'
    var i2 = document.createElement('i');
    i2.className=secondIcon;
    span3.appendChild(i2);

// ***************************************************
    icon.appendChild(i1);
    text_badge_arrow.appendChild(span1);
    text_badge_arrow.appendChild(span2);
    text_badge_arrow.appendChild(span3);
    nav_line.appendChild(icon);
    nav_line.appendChild(text_badge_arrow);

// ***************************************
    return nav_line;
}
function createinputSearch() {
   var search = document.createElement('div');
   search.className="search";
   var input = document.createElement('input');
   input.type='text';
   input.placeholder='Search';
   var btn_search = document.createElement('button');
   var i_search = document.createElement('i');
   i_search.className="fas fa-search fa-fw";
   btn_search.appendChild(i_search);
   search.appendChild(input);
   search.appendChild(btn_search);
   return search;
}

function createCompleteMenu() {
Array=[
    createMenu('nav-icon fas fa-tachometer-alt fa-2x icon-img','Dashboard','','right fas fa-angle-left'),
    createMenu('nav-icon fas fa-th fa-2x icon-img','Widgets','New',''),
    createMenu('nav-icon fas fa-copy fa-2x icon-img','Lay-out options','6','right fas fa-angle-left'),
    createMenu('nav-icon fas fa-chart-pie fa-2x icon-img','Charts','','right fas fa-angle-down'),
    createMenu('far fa-circle nav-icon','ChartJS','',''),
    createMenu('far fa-circle nav-icon','Flot','',''),
    createMenu('far fa-circle nav-icon','Inline','',''),
    createMenu('far fa-circle nav-icon','uPlot','',''),
    createMenu('nav-icon fas fa-tree fa-2x icon-img','UI Elemnts','','right fas fa-angle-left'),
    createMenu('nav-icon fas fa-edit fa-2x icon-img','Forms','','right fas fa-angle-left'),
    createMenu('nav-icon fas fa-table fa-2x icon-img','Tables','','right fas fa-angle-left')
]
main_nav.appendChild(createinputSearch());
Array.forEach(element => {
 main_nav.appendChild(element);  
});
return main_nav;
}

window.onload=createCompleteMenu();
btn_menu.addEventListener('click',()=>nav.classList.toggle('enlarge'));
nav.addEventListener('mouseenter',()=>nav.classList.toggle('enlarge'))










