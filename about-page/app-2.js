const portfoliobtn=document.querySelector('#portfolio-btn');
const sidenavbtns=document.querySelector('#sidenav-btns');

const menuButton=document.querySelector("#menu-btn");
const sidebar=document.querySelector("#sidebar-full");

const portfolioIconOpen=document.querySelector('.portfolio-icon-open');
const portfolioIconClose=document.querySelector('.portfolio-icon-close');

portfoliobtn.addEventListener('click',()=>{
    if(sidenavbtns.style.display==='none'){
        sidenavbtns.style.display='block';
    }
    else{
        sidenavbtns.style.display='none';
        portfolioIconClose.style.display='none';
    }
})

menuButton.addEventListener('click',()=>{
    if(sidebar.style.display==="none"){
        sidebar.style.display="block";
    }
    else{
        sidebar.style.display="none";
    }
})

// sidebar.style.display="block";

// var a;

// function show_hide(){
//     if(a==1)
//     {
//         sidenavbtns.style.display="inline";
//         return a=0;
//     }else
//     {
//         sidenavbtns.style.display="";
//     }
// }

