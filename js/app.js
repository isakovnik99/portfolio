var naviToggle= document.getElementById('navi-toggle');
var links= document.getElementsByClassName('navigation__link');
window.sr = ScrollReveal();
sr.reveal('#footer', {duration:2500});
sr.reveal('#form1',{duration:2500});
//sr.reveal('#about',{duration:2500});
sr.reveal('.heading-secondary', {duration:2500});
sr.reveal('.heading-tertiary', {duration:2500});
sr.reveal('.composition', {duration:2500});
sr.reveal('p', {duration:2500});




for(i=0;i<links.length;i++){
    links[i].addEventListener('click', function(){
        naviToggle.checked=false;
    })
}