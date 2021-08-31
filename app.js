let btn=  document.querySelectorAll('.drum')
for(let b of btn){
    b.addEventListener('click',function(){
        const buttonInnerHTML= this.innerHTML;
        makesound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
};
    document.addEventListener('keypress',function(event){
        makesound(event.key);
        buttonAnimation(event.key);
    });


    function makesound(key){
          switch(key){
              case 'w': 
              let tom1= new Audio('sounds_tom-1.mp3');
              tom1.play();
              break;
              case 'a': 
              let tom2= new Audio('sounds_tom-2.mp3');
              tom2.play();
              break;
              case 's': 
              let tom3= new Audio('sounds_tom-3.mp3');
              tom3.play();
              break;
              case 'd': 
              let tom4= new Audio('sounds_tom-4.mp3');
              tom4.play();
              break;
              case 'j': 
              let snare= new Audio('sounds_snare.mp3');
              snare.play();
              break;
              case 'k': 
              let crash= new Audio('sounds_crash.mp3');
              crash.play();
              break;
              case 'l': 
              let kick= new Audio('sounds_kick-bass.mp3');
              kick.play();
              break;
              default:
                  console.log(key);
                  break;
          }
    };
    function buttonAnimation(key){
        let activebtn= document.querySelector(`.${key}`);
        activebtn.classList.add('pressed');
        setTimeout(() => {
            activebtn.classList.remove('pressed')
        }, 100);
    };