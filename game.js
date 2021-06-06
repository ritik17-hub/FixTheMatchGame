

var btn = document.getElementById('button');
var result = document.getElementById('result');
let img1 = document.getElementById('1');
let img2 = document.getElementById('2');
let img3 = document.getElementById('3');
var img=document.querySelectorAll('.img');

var count=0;
var score=0;
var move=3;
function resultfun() {
    
   if(count<3){
    result.innerText = '';
    btn.innerText="loading...";
    let imgclass=Array.from(img);
    for(i=0;i<img.length;i++){
        imgclass[i].classList.remove('slide-bottom');
        imgclass[i].setAttribute("src","gif2.gif");
        }

    let imgarr = ['happy.png', 'wink.png', 'in-love.png', 'smiling.png'];
    let c1 = Math.floor(Math.random() * 3);
    let c2 = Math.floor(Math.random() * 3);
    let c3 = Math.floor(Math.random() * 3);

   setTimeout(function (){
        img1.setAttribute("src", imgarr[c1]);
        img1.classList.add('slide-bottom');  
    },1000);

    setTimeout(function (){
        img2.setAttribute("src", imgarr[c2]); 
        img2.classList.add('slide-bottom');  
    },2500);
    
    setTimeout(function (){
        img3.setAttribute("src", imgarr[c3]);
        img3.classList.add('slide-bottom');   
    },3500);
    
    setTimeout(function (){
        if (c1 == c2 && c1 == c3) {
            result.innerText = 'HURRAY!! YOU WIN';
            score=score+5;
            document.getElementById("scoredisplay").innerText=`${score}`;
            btn.innerText="play again";
        } else {
            result.innerText = 'OPPS!! YOU LOSE';
            btn.innerText="play again";
            move=move-1;
            document.getElementById("lives").innerText=`${move}`;
            document.getElementById("scoredisplay").innerText=`${score}`;
            count++;
        }
    },4500);

    

}else{
    document.getElementById('modal').click();
    document.getElementById("score").innerText=`${score}`;
    
}
 


}


btn.addEventListener('click', function () {

    resultfun();
     
    
});



