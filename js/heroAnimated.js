const widthScreen = screen.width;
const heightScreen = screen.height;



const hero = document.querySelector('.hero');
for(let i =0; i <= 35; i++){
    const blocks = document.createElement('div');
    blocks.classList.add('block');
    hero.appendChild(blocks);
}

function animatedBlocks(){
    anime({
        targets: '.block',
        translateX: function(){
            return anime.random(-widthScreen ,widthScreen);
        },
        translateY: function(){
            return anime.random(-heightScreen,heightScreen);
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