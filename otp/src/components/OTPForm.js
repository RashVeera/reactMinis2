import React, { useEffect, useRef,useState } from 'react'

const OTPForm = ({otplen,onsubmit}) => {
    const [otp,setotp]=useState(new Array(otplen).fill(""))
    const inptuRefs=useRef([])
    useEffect(()=>{
    if(inptuRefs.current[0]){
        inptuRefs.current[0].focus()
    }
    },[])


    const handlechange = (e,index) =>{
        const value=e.target.value;
        const newotp=[...otp]

        newotp[index]=value.substring(value.length-1)
        setotp(newotp)

        const combinedotp=newotp.join("")
        if(combinedotp.length===otplen) onsubmit(combinedotp)

        // move to next input fields if empty
        if(value && index<otplen-1 && inptuRefs.current[index+1]){
            const newindex=(otp.indexOf("",index+1)===-1)?otplen-1:otp.indexOf("",index+1)
            inptuRefs.current[newindex].focus()
        }
    }

    const handlekeydown=(e,index)=>{
        if(e.code==="Backspace" && !otp[index] && index>0 && inptuRefs.current[index-1] ){
            inptuRefs.current[index-1].focus()
        }
    }
    const handleclick=(e,index)=>{
        inptuRefs.current[index].setSelectionRange(1,1)

        if(index>0 && !otp[index-1]){
            inptuRefs.current[otp.indexOf("")].focus()
        }
    }

  return (
    <div>
        {otp.map((inputfield,index)=>
        {
         return <input className='inputfields' 
         ref={(input)=>inptuRefs.current[index]=input}
         value={otp[index]} 
         onChange={(e)=>handlechange(e,index)} 
         onKeyDown={(e)=>{handlekeydown(e,index)}}
         onClick={(e)=>{handleclick(e,index)}}
         />
        }
        )}
    </div>
  )
}

export default OTPForm