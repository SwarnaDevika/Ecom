const bar= document.getElementById('bar'); //making dropdown menu of navbar items
const close= document.getElementById('close');
const nav=document.getElementById('navbar');

if(bar){//checking whether menu box is clicked or not(active)
    bar.addEventListener('click',() =>{
        nav.classList.add('active') //ceating this active class in stylesheet
    })
}

if(close){
    close.addEventListener('click',() =>{
        nav.classList.remove('active') //when person clicks on close icon, the navbar menu gets removed
    })
}