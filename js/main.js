let nav = $('.nav-bar');
let aboutSectionTop = $('.section-two').offset().top;
$(document).ready(function () {
    if($(window).scrollTop() < aboutSectionTop - nav.innerHeight()){
        nav.css({backgroundColor: 'transparent'});
    }else{
        nav.css({backgroundColor: 'rgba(0,0,0,1)'});
    }
});
$(window).scroll(function(){
    if($(window).scrollTop() > aboutSectionTop - nav.innerHeight() ){
        nav.css({backgroundColor: 'rgba(0,0,0,1)'})
    }else{
        nav.css({backgroundColor: 'transparent'})
    }
})
$('.nav-bar ul a').click(function(){
    let scroll = $($(this).attr('href')).offset().top;
    $('html,body').animate({scrollTop: scroll}, 3000);
    $(`.nav-bar ul a`).removeClass('main-color');
    $(this).addClass('main-color');
});

let x = $('[class^="section"]');
let targetElement = document.querySelectorAll('[class^="section"]');
let target = document.querySelector('#members');
console.log(x);
let sections = [...x];
function changeColor(entries){
    if(entries[0].isIntersecting){
        $(`.nav-bar ul a[href="#${entries[0].target.attributes[0].nodeValue}"]`).addClass('main-color');
    }else{
        $(`.nav-bar ul a[href="#${entries[0].target.attributes[0].nodeValue}"]`).removeClass('main-color');
    }  
}
function changeContent(entries){
    let counter = 0;
    function count(){
        counter+=50;
        if(counter<=200){
            $('#members').html(counter);
        }
        if(counter<=345){
            $('#projects').html(counter);
        }
        if(counter<=1800){
        
            $('#download').html(counter);
        }
        if(counter<=1200){
            $('#code').html(counter);
        }
        if(counter == 1800){
            clearInterval(id)
        }
    }
    if(entries[0].isIntersecting){
        var memberId = setInterval(count, 100);
        $(`.nav-bar ul a[href="#${entries[0].target.attributes[0].nodeValue}"]`).addClass('main-color');
    }   
}
let options = {
    root: null, // takes a DOM element
    rootMargin: "0px", // takes a string indicating margins
    threshold:  0.51 // takes a number or an array of numbers between 0 and 1
  };
let navObserver = new IntersectionObserver(changeColor,options);
let contentObserver = new IntersectionObserver(changeContent,options);

// $(window).scroll(function(){
    targetElement.forEach(element => navObserver.observe(element));
    contentObserver.observe(target)
// })
// for(let i = 0; i<=200; i++){
//     $('#members').animate({html: i}, 2000)
//     console.log(i);
// }
