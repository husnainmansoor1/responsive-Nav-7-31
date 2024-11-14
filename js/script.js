let hum = document.querySelector('.slide');

let turn=0;

hum.addEventListener('click',()=>{

    if(turn==0){
        document.querySelector('ul').style.display='flex';
        turn+=1;
    }
    else if(turn==1 ){
        document.querySelector('ul').style.display='none';
        turn-=1;
    }
   
})




