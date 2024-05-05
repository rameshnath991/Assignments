'use client'
import React,{useState} from 'react'
import { GrLike } from "react-icons/gr";

const page = () => {
    let [color, setColor]= useState('grey')
    let [LikeUnlike, setLikeUnlike] = useState('Unlike ')
    let handleColorChange = ()=>{
      if (color == "grey"){
        setColor("blue")
        setLikeUnlike('Like')
    }else {
        setColor("grey")
        setLikeUnlike('Unlike')
    }
    }
  return (
    <div>
        <button onClick={()=>handleColorChange()} className='bg-slate-50 p-2 border '>
        {LikeUnlike}<GrLike color={color}/> 
            </button>
    </div>
  )
}

export default page