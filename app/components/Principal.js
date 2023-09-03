"use client"

//Bbliotecas importantes para o acolhimento dos dados servidor
import React,{useEffect,useState} from 'react'

import Track from './track'





  


export default function Principal(){

 //variaveis de estado
  const [sms,setSMS]=useState([{
    img:"",
    audio:"",
    name:""
  }])

  //permite que a funcao seja executada uma vez
  useEffect(()=>{
    
    
    //funcao que recebe dados do servidor
    async function fetchData(){
    
    try{
      const response= await fetch("https://serverfreemusic.onrender.com/")

      const items=await response.json()
      
     setSMS((prevItem)=>{
       return  (items.map(item =>{
            return {img:item.img,audio:item.audio,name:item.name}
        }))
     } )
      
      
    }catch(error){
      console.log(error);
    }
  }
  fetchData()

  },[])

   //Front-End
    return <div className='main background'>{
        sms.map((item,index) =>{ return <Track key={index} url={item.img} track={item.audio} name={item.name} />})}
        </div>
}