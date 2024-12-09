import React, { useState } from 'react'

const CheckoutStepper = ({configData}) => {
    const [currentindex,setcurrentindex]=useState(1)
    const [isComplete,setisComplete]=useState(false)
    const handleClick =() =>{
        setcurrentindex((prevIndex)=>{
            if(prevIndex>=configData.length){
                setisComplete(true)
                return prevIndex
            }
            else{
                return prevIndex+1
            }
        })
    }
    const calculatewidth =() =>{
        console.log(currentindex-1,configData.length-1)
        if(isComplete ){
            return 100;
        }
        return ((currentindex-1)/(configData.length-1))*100
    }

    const ActiveComponent = configData[currentindex-1].Component;
  return (
    <div className='whole'>
    <div className='step__container'>
        {configData.map((value,index)=>{
            return (
                <div className='each__step'>
                <span className={`step__number 
                ${ (index+1<currentindex || isComplete )? 'completed':""}
                ${(index+1 === currentindex && !isComplete) ? 'active':""}
                `}> 
                {(index+1<currentindex || isComplete) ? <span className='iconColor'>&#10004;</span>:index+1}
                </span>
                <span className='step__name'>{value.name}</span>
                </div>
            )
        })
          
        }


       
    </div>
    <div className='progressbar'>
            <div className='progress' style={{width:`${calculatewidth()}%`}}>
            </div>
        </div>
    <div className='whole__container'>
    {currentindex <= configData.length &&  <ActiveComponent/>}
     {!isComplete &&<button onClick={handleClick} className='btn'>{currentindex===configData.length? "Finish":"Next"}</button>}
     </div>
     </div>
  )
}

export default CheckoutStepper