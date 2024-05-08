'use client'
import React,{useState} from 'react'
import { GrLike } from "react-icons/gr";
import { FaHeart } from "react-icons/fa";
import { FaFaceLaughSquint } from "react-icons/fa6";
import { FaFaceAngry } from "react-icons/fa6"; 
import { MdChildCare } from "react-icons/md";  
import { FaSurprise } from "react-icons/fa";
import { FaFaceSadTear } from "react-icons/fa6";


const page = () => {
    const [color, setColor]= useState('grey')
    const [reaction, setReaction]= useState('like')
    const [reactionDivOpen, setReactionDivOpen]= useState(false)


    const changeReaction =(newReaction, newColor)=>{
      //love --> newReaction--> love
      if(newReaction===reaction && color===newColor){
        setColor('grey')
        setReaction('like')
      }else{
        setColor(newColor)
        setReaction(newReaction)
      }
    
    }

  const ReactionDiv= ()=>{
    return (
      <div className='border border-gray-200 shadow-lg w-50 bg-slate-50'>
        <button  className=' p-2 m-2 bg-blue-700  '>
            <GrLike  onClick={()=> changeReaction('like' , 'blue')} color="white"/>
        </button>
        <button  className=' p-2  m-2 bg-red-600 '>
            <FaHeart  onClick={()=> changeReaction('love')} color="white"/>
        </button>
        <button  className=' p-2  m-2 bg-yellow-950'>
            <MdChildCare  onClick={()=> changeReaction('care')} color="yellow"/>
        </button>
        <button  className=' p-2  m-2 bg-yellow-400 '>
            <FaFaceLaughSquint onClick={()=> changeReaction('haha')} color="orange"/>
        </button>
        <button  className=' p-2  m-2 bg-yellow-950 '>
            <FaSurprise onClick={()=> changeReaction('wow')} color="yellow"/>
        </button>
        <button  className=' p-2  m-2 bg-yellow-950 '>
            <FaFaceSadTear onClick={()=> changeReaction('sad')} color="yellow"/>
        </button>
        <button  className=' p-2  m-2 bg-red-950 '>
            <FaFaceAngry onClick={()=> changeReaction('angry')} color="red"/>
        </button>
        
        
      </div>
    )
  }

  const generateReactionButton = ()=>{
    //we will have if else later, if reaction is like, show like button,,..... similar
    if(reaction === 'love'){
      return (
            <button
            onClick={()=>changeReaction('love')}
            onMouseEnter={()=>setReactionDivOpen(true)} className=' p-2 '>
            <FaHeart color="crimson"/>
        </button>
      )
    }else  if(reaction === 'haha'){
      return (
            <button
            onClick={()=>changeReaction('haha')}
            onMouseEnter={()=>setReactionDivOpen(true)} className=' p-2 '>
            <FaFaceLaughSquint color="orange"/>
        </button>
      )
    }


    else  if(reaction === 'angry'){
      return (
            <button
            onClick={()=>changeReaction('angry')}
            onMouseEnter={()=>setReactionDivOpen(true)} className=' p-2 '>
            <FaFaceAngry color="red"/>
        </button>
      )
    }

    else  if(reaction === 'care'){
      return (
            <button
            onClick={()=>changeReaction('care')}
            onMouseEnter={()=>setReactionDivOpen(true)} className=' p-2 '>
            <MdChildCare color="yellow"/>
        </button>
      )
    }

    else  if(reaction === 'wow'){
      return (
            <button
            onClick={()=>changeReaction('wow')}
            onMouseEnter={()=>setReactionDivOpen(true)} className=' p-2 '>
            <FaSurprise color="yellow"/>
        </button>
      )
    }

    else  if(reaction === 'sad'){
      return (
            <button
            onClick={()=>changeReaction('sad')}
            onMouseEnter={()=>setReactionDivOpen(true)} className=' p-2 '>
            <FaFaceSadTear color="yellow"/>
        </button>
      )
    }



    else{
        return ( 
          <button 
          onClick={()=>changeReaction('like')}
          onMouseEnter={()=>setReactionDivOpen(true)}
           className='bg-gray-200 p-2 border border-black'>
            <GrLike color={color}/>
        </button>)
 
    }
 
  }

//ternary operator ? : is alternative for if else
//Do not use ternary operator for multiple else if
  return (
    <div>
      {reaction}
      {color}
        {reactionDivOpen ? <ReactionDiv/>: null }
        {generateReactionButton()}
    </div>
  )
}

export default page