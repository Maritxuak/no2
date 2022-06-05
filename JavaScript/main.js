var left_arrow = document.querySelector('.controler_slide_left')
var right_arrow = document.querySelector('.controler_slide_right')
var sl1 = document.querySelector('slide1')
var sl2 = document.querySelector('slide2')
var sl3 = document.querySelector('slide3')
var sl4 = document.querySelector('slide4')
var sl5 = document.querySelector('slide5')
var sl6 = document.querySelector('slide6')
var sl7 = document.querySelector('slide7')
left_arrow.onclick = function(){
    sl1.style.transform = 'translateX(-10px)';
    sl2.style.transform = 'translateX(-10px)';
    sl3.style.transform = 'translateX(-10px)';
    sl4.style.transform = 'translateX(-10px)';
    sl5.style.transform = 'translateX(-10px)';
    sl6.style.transform = 'translateX(-10px)';
    sl7.style.transform = 'translateX(-10px)';
}
console.log('Hello World!')