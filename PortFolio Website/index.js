// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });


// function pageAnimation(){
//     var tl = gsap.timeline();
//     tl.from("#nav",{
//         y:'-10',
//         opacity:0,
//         duration:1,
//         ease: Expo.easeInOut
        
//     })
//     .to(".boundingelem",{
//         y:-10,
//         duration:1.5,
//         ease:Expo.easeInOut,
//         stagger: .2

//     })

    


// }

// var timeOut;
// function differencCalc(){   
// var xscale = 1;
// var yscale = 1;
//  var xprev = 0;
//  var yprev = 0;

// var difX;
// var difY;
// window.addEventListener("mousemove", function(details){
//         clearTimeout(timeOut);
//         difX = details.clientX - xprev;
//         xprev =details.clientX;
//         difY = details.clientY - yprev;
//         yprev = details.clientY;
//          xscale = gsap.utils.clamp(.8,1.2,difX);
//          yscale = gsap.utils.clamp(.8,1.2,difY);
//         //  console.log(" xpos = " + xscale);
//         //  console.log("y pos = "+ yscale);

//          circleMouseFollower( xscale, yscale);

// timeOut = setTimeout(function(){
//     document.querySelector("#minicircle").style.transform = `translate(${details.clientX}px, ${details.clientY}px) scale(1,1)`;
// },100);
//     });
// }








// function circleMouseFollower( xscale, yscale){

//     window.addEventListener("mousemove" , function(dets){
        

//         document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale}, ${yscale})`
//     });


// }
// circleMouseFollower();
// pageAnimation();
// differencCalc();

// document.querySelector(".product .boundingelem").addEventListener("click", dotH1);

// function dotH1(){
//     console.log("working")
//     document.querySelector(".minicircle").classList.add("blackmini");


// }



// // ++++++++++++++++++++plug images++++++++++++++

// document.querySelectorAll(".plug").forEach(function(plug){
//     plug.addEventListener("mousemove",function(details){

//         console.log(details);
//     })
// })



// document.querySelectorAll(".plug").forEach(function(Sid){
//     var rotate = 0;
//     var diffrotate = 0;
// Sid.addEventListener("mousemove",function(details){
//     // console.log(details.clientY);
//     var dif = details.clientY - Sid.getBoundingClientRect().top;
//     // --------------------rotation------------------------------
   
//      rotate = details.clientX;
//      diffrotate = details.clientX - rotate;
//     rotate = details.clientX;





//     gsap.to(Sid.querySelector("img"),{
//         opacity:1,
//         ease:Power1,
//         top:dif,
//         left:details.clientX,
//         rotate:gsap.utils.clamp(-20,20,diffrotate)


//     });







// })

// }
function togglebtn(){
    console.log("helelo")
document.querySelector('.hero').classList.toggle('whiter')
}

document.querySelector('.toggle-btn').addEventListener('onclick',togglebtn)