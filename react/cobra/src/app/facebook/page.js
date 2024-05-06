'use client'
import React,{useState} from 'react'
import { GrLike } from "react-icons/gr";

const page = () => {
    let [color, setColor]= useState('grey')
   
    let handleColorChange = ()=>{
      if (color == "grey"){
        setColor("blue")
       
    }else {
        setColor("grey")
     
    }
    }
  return (
    <div>
        <button onClick={()=>handleColorChange()} className='bg-slate-50 p-2 border '>
        <GrLike color={color}/> 
            </button>
    </div>
  )
}

export default page