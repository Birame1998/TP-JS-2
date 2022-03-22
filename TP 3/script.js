const image_gf=document.getElementById('image_gf');
const btns=document.querySelectorAll('button');
var images= ['img/img1.jpg','img/img2.jpg','img/img3.jpg','img/img4.jpg','img/img5.jpg','img/img6.jpg'];
var i=0;



function makeCarrousel() {
    image_gf.src=images[i];
    document.getElementById('image').src=images[i];
    if (i<images.length-1) {
        i++
    }else{
        i=0;
    }
    setTimeout('makeCarrousel()',5000);
}

window.onload=makeCarrousel();
image.addEventListener('mouseover',()=>{
    image.classList.toggle('zoom');
})
