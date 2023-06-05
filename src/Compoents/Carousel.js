import React from 'react';
import Card from './cards';
import { useState } from "react";
function Carousel(props) {
    const data = props.data;
    console.log(data)
   

    if(data){
        return (
            <>
           <div className='carousel'>
               <div className='carousalContainer'>
                {data.map((item,i)=>(
                  <div key={i}><Card img={item.thumbnail} id={item.author}></Card></div>  
                ))}
                </div>
           </div>
            
            </>
        );

    }else{
        return (
            <>
            <div>AKram</div>
            
            </>
        );
    }
   
  }

export default Carousel;