const anim = gsap.timeline({defaults: {duration: 2}}) 
let i=1
function anime(){
if (i==1) {
    anim.fromTo(`.ice`,{y:0},{y:-40});
    anim.fromTo(`.ice`,{y:-40},{y:0});
    i++;
    console.log(i);
} 
if(i==2){    
anim.fromTo(`.ice`,{y:0},{y:40});
anim.fromTo(`.ice`,{y:40},{y:0});
i--;
console.log(i);
}
setTimeout(anime, 1000);
}
anime()