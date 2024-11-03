// generate a random color

const randomColor = function(){
    const hex = "0123456789ABCDEF";
    let color = '#'
    for(let i = 0 ; i<6;i++){
    color += hex[Math.floor(Math.random()*16)]
    }
    return color;
  
  };
  
  console.log(randomColor());
  
  let intervalId
  
  let startchangingcolor = function(){
   if(!intervalId){
   intervalId = setInterval(changebg , 1000);
   }
   function changebg(){
    document.body.style.backgroundColor = randomColor();
   }
  }
  let stopchangingcolor = function(){
     clearInterval(intervalId);
     intervalId = null
  }
  document.querySelector("#start").addEventListener('click', startchangingcolor);
  
  document.querySelector("#stop").addEventListener('click',stopchangingcolor)