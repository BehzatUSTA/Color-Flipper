let r=255,g=255,b=255;
//red more  or less
let rm=document.querySelector(".rm");
let rl=document.querySelector(".rl");
//green more or  less
let gm=document.querySelector(".gm");
let gl=document.querySelector(".gl");
//blue more or less
let bm=document.querySelector(".bm");
let bl=document.querySelector(".bl");

let dis=document.querySelector(".showrgb")
//simple button
let simple=document.querySelector(".simple")
simple.addEventListener("click", ()=>{
   r=255;
   b=255;
   g=255;
   document.body.style.backgroundColor=`rgb(${r},${g},${b})`
  
   return dis.innerText=`rgb(${r},${g},${b})`

} )
rm.addEventListener("click",()=>{

  if(r<255){
    r+=5;
    console.log(r)
    if(r==255){
        alert(`255 is the UP LIMIT for RED`)
      }
    
  }
   let rgb= document.body.style.backgroundColor=`rgb(${r},${g},${b})`
   console.log(`rgb(${r},${g},${b})`)
   dis.innerText=`rgb(${r},${g},${b})`
   
})
rl.addEventListener("click",()=>{

    if(r>=5){
      r-=5;
      console.log(r)
      if(r==0){
        alert("0 is the DOWN LIMIT for RED")
      }
     
      
    }
    document.body.style.backgroundColor=`rgb(${r},${g},${b})` 
    console.log(`rgb(${r},${g},${b})`)
    dis.innerHTML=`rgb(${r},${g},${b})`
  })

  //green
  gm.addEventListener("click",()=>{

    if(g<255){
      g+=5;
      console.log(g)
      if(g==255){
          alert("255 is the UP LIMIT for GREEN")
        }
      
    }
     let rgb= document.body.style.backgroundColor=`rgb(${r},${g},${b})`
     console.log(`rgb(${r},${g},${b})`)
     dis.innerHTML=`rgb(${r},${g},${b})`
  })
  gl.addEventListener("click",()=>{
  
      if(g>=5){
        g-=5;
        console.log(g)
        if(g==0){
          alert("0 is the DOWN LIMIT for GREEN")
        }
       
        
      }
      document.body.style.backgroundColor=`rgb(${r},${g},${b})` 
      console.log(`rgb(${r},${g},${b})`)
      dis.innerHTML=`rgb(${r},${g},${b})`
    })
    //blue
    bm.addEventListener("click",()=>{

        if(b<255){
          b+=5;
          console.log(b)
          if(b==255){
              alert("255 is the UP LIMIT for BLUE")
            }
          
        }
         let rgb= document.body.style.backgroundColor=`rgb(${r},${g},${b})`
         console.log(`rgb(${r},${g},${b})`)
         dis.innerHTML=`rgb(${r},${g},${b})`
      })
      bl.addEventListener("click",()=>{
      
          if(b>=5){
            b-=5;
            console.log(b)
            if(b==0){
              alert("0 is the DOWN LIMIT for BLUE")
            }
           
            
          }
          document.body.style.backgroundColor=`rgb(${r},${g},${b})` 
          console.log(`rgb(${r},${g},${b})`)
          dis.innerHTML=`rgb(${r},${g},${b})`
        })
//random color

let  hexset=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
let hex=document.querySelector(".hex");
let randombtn =document.querySelector(".randombtn");
randombtn.addEventListener("click",(event)=>{
  let hexcolor="#";
  for(let i=0;i<6;i++){
    hexcolor+=hexset[randomnum()]
    console.log(hexcolor)
  }
  hex.innerText=hexcolor;
  document.body.style.backgroundColor=hexcolor;
 
  
  
})
let randomnum=()=>{
 return Math.floor(Math.random()*hexset.length)
}


        

  


