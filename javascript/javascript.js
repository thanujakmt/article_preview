
var sharebtn = document.querySelector('.share_icon');
var shareicon = document.querySelector('.article');

sharebtn.addEventListener('mousemove', () => {
    document.querySelector('.icons').style.display = 'flex';
});

shareicon.addEventListener('click', () => {
    document.querySelector('.icons').style.display = 'none';
});

var sharediv = document.querySelector('.share');
var social_icons = document.querySelector('.social');

sharebtn.addEventListener('click', () => {
    if(window.innerWidth <= 1280){
        social_icons.style.display = 'flex';
        sharediv.style.display = 'none';
    }
   
}); 

var shbtn = document.querySelector('.social');

shbtn.addEventListener('click', () => {
    if(window.innerWidth <= 1280){
        document.querySelector('.share').style.display = 'flex';
        document.querySelector('.social').style.display = 'none';
    }
})

