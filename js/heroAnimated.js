const widthScreen = screen.width;
const heightScreen = screen.height;

function isMobile(){
    return (
        (navigator.userAgent.match(/Android/i)) ||
        (navigator.userAgent.match(/webOS/i)) ||
        (navigator.userAgent.match(/iPhone/i)) ||
        (navigator.userAgent.match(/iPod/i)) ||
        (navigator.userAgent.match(/iPad/i)) ||
        (navigator.userAgent.match(/BlackBerry/i))
    );
}

var n=0;
if(isMobile()){
    n=10;
}else{
    n=18;
}


const hero = document.querySelector('.hero');
for(var i =0; i <= n; i++){
    const blocks = document.createElement('div');
    blocks.classList.add('block');
    hero.appendChild(blocks);
}

function animatedBlocks(){
    anime({
        targets: '.block',
        translateX: function(){
            return anime.random(-(widthScreen/2) ,(widthScreen/2));
        },
        translateY: function(){
            return anime.random(-(heightScreen/2),(heightScreen/2));
        }, 
        scale: function(){
            return anime.random(1,5);
        },
        easing: 'linear',
        duration: 3000,
        delay: anime.stagger(10),
        complete: animatedBlocks,
    })
}

animatedBlocks();