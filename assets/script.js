
document.addEventListener('DOMContentLoaded',function(){
 const toggle=document.querySelector('.menu-toggle'), nav=document.querySelector('.main-nav');
 if(toggle) toggle.addEventListener('click',()=>{nav.classList.toggle('open')});
 const note=document.getElementById('cookieNote'), ok=document.getElementById('cookieOk');
 if(note && localStorage.getItem('escritiva_cookie_ok')==='1') note.style.display='none';
 if(ok) ok.addEventListener('click',()=>{localStorage.setItem('escritiva_cookie_ok','1');note.style.display='none'});
});
