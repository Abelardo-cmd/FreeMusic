"use client"
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import React, {useState,useEffect} from 'react'



export default function Track (props){

 const [IsOver,setValue]=useState(false)
 const [play,setPlay]=useState(false)

 function setStyle(){
  setValue(true)
  
  
 }
 function delStyle(){
   setValue(false)
  }


 function HandleClick(){
  const audio=document.querySelector('audio')
      setPlay(!play)

      if(play){
        
        audio.play()
      }else{
        audio.pause()
      }

}



 return  (<div  onClick={HandleClick}  onMouseOver={setStyle} onMouseOut={delStyle} className='track'>
            <div className='imgTrack'>
               <img  src={props.url} alt=""   width="130" height="130"/>
               <span className='play'>{IsOver?<PlayCircleIcon  sx={{ fontSize: 50}}/>:''}</span>
            </div>
            <h2>{props.title}</h2>
            <p>{props.name}</p>
          </div>)
}