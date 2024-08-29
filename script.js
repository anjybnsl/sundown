const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    // in the above brackets we have to write our main warapper div name & & & keep in mind the main div should not have any
    // height, so do not give height to the main wrapper div in order for Locomotive to work smoothly.
    // '.main' : here . is used as the main wraper is a class and class is targated with '.' and id is targated with '#'
    smooth: true
});

// the below code from line 11-23 is for the box which displayes over the elem-container upon mouse cursor hovering.

function page3Animation(){
    var elemC = document.querySelector(".elem-container")
var fixed = document.querySelector(".fixed-media")
elemC.addEventListener("mouseenter",function(){
    fixed.style.display = "block"
})
// with the above, as soon as the mouse coursor ENTERS the elem-container the fixed-media box will be displayed.

// var elemC = document.querySelector(".elem-container")
// var fixed = document.querySelector(".fixed-media")
elemC.addEventListener("mouseleave",function(){
    fixed.style.display = "none"
})
// with the above, as soon as the mouse coursor LEAVES the elem-container the fixed-media box will be hidden.

// now the below code is for the media to be displayed inside the elem-container fixed-media box

var elems = document.querySelectorAll(".elem")
// here ith querySelectorAll we are selecting all elems at once and using below forEach loop on them and "e" will be our 
// variable to take us to the next elem
elems.forEach(function(e){
    e.addEventListener("mouseenter",function(){
        var image = e.getAttribute("data-image")
        // console.log(image)
        fixed.style.backgroundImage = `url(${image})`
        // here we are setting the images to the fixed box. 
        // Now, `url(${})` : Template literals are sometimes informally called template 
        // strings, because they are used most commonly for string interpolation (to create strings by doing substitution 
        // of placeholders). However, a tagged template literal may not result in a string; it can be used with a custom 
        // tag function to perform whatever operations you want on the different parts of the template literal.
    })
})
}


function swiperAnimation(){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: false,
        spaceBetween: 50,
    });
}


function loaderAnimation(){
    var loader = document.querySelector(".loader")
setTimeout(function(){
    loader.style.top = "-100%"
},4200)
}


swiperAnimation()
page3Animation()
loaderAnimation()


var manu = document.querySelector("nav h3")
var full = document.querySelector(".full-scr")
var navimg = document.querySelector("nav img")
var flag = 0
manu.addEventListener("click",function(){
    if(flag == 0){
        full.style.top = 0
        navimg.style.opacity = 0
        flag = 1
    }else{
        full.style.top = "-100%"
        navimg.style.opacity = 1
        flag = 0
    }
})
