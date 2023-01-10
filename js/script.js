const mob_nav_btn=document.querySelector('.mobile-nav-btn');
const header=document.querySelector('.header');
mob_nav_btn.addEventListener("click",()=>togolNav());
const togolNav=()=>{
    header.classList.toggle("active");
}


//Displaying Preview Image
let previewContainer=document.querySelector('.movie-preview');
let previewBox=document.querySelectorAll('.preview');
document.querySelectorAll('.movie-container .movie').forEach(product =>{
    product.onclick = () =>{
        previewContainer.style.display='flex';
        let name=product.getAttribute('data-name');
        previewBox.forEach(preview => {
            let target=preview.getAttribute('data-target');
            if(name==target){
                preview.classList.add('mactive');
            }
        })
    }    
});


previewBox.forEach(close =>{
    close.querySelector('.fa-times').onclick = () =>{
        close.classList.remove('mactive');
        previewContainer.style.display='none';
    };
});