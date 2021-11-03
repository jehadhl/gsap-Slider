
const btnRight = document.querySelector('.btn-next');
const btnLeft = document.querySelector('.btn-prev');
const container = document.querySelector('.container');
const slides = Array.from(document.querySelectorAll('.slide'));
const indexIndication = document.querySelector('.counter span:nth-child(1)');

let index = 0;

function animRight(){

    const TLRIGHT=  gsap.timeline();

    TLRIGHT
    .set(indexIndication , {
        innerText: index +1
    })
     .to(slides[index] ,{duration:0.6,x:0})
}

function animLeft(){

    const TLLEFT=  gsap.timeline();

    TLLEFT
    .set(indexIndication , {
        innerText: index 
    })
     .to(slides[index] ,{duration:0.6,x:"-100%"})
}

btnRight.addEventListener('click',function(){


    if(index === slides.length - 1){
        gsap.to(container , {
            keyframes : [
                {duration:0.4 , x:4},
                {duration:0.4 , x:-4},
                {duration:0.4 , x:4},
                {duration:0.4 , x:0},
            ]
        })
        return;
    }

   index ++;
   animRight()
})


btnLeft.addEventListener('click',function(){


    if(index === 0){
        gsap.to(container , {
            keyframes : [
                {duration:0.4 , x:4},
                {duration:0.4 , x:-4},
                {duration:0.4 , x:4},
                {duration:0.4 , x:0},
            ]
        })
        return;
    }
   animLeft()
   index --;
})
  

