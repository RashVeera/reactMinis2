import React, { useState } from 'react'
import OTPForm from './OTPForm'

const LoginPhone = () => {
    const [phoneNumber,setphoneNumber]=useState("")
    const [showotp,setshowotp]=useState(false)
    const handlechange =(e)=>{
        const number=e.target.value;
        setphoneNumber(number)
    }
    const handleSubmit =(e)=>{
        e.preventDefault()
        const regex=/^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/;
        if(!phoneNumber.match(regex)) alert("Enter a valid Phone number");
        setshowotp(true)
    }

    const otphandle = (otp)=>{
        alert("Login successful")
    }

  return   (
      <div className='loginPhone'>
        {!showotp ?( <form className='formContainer'  onSubmit={(e)=>handleSubmit(e)}>
            <span>
                Login with phone
            </span>
            <input type='text' value={phoneNumber} onChange={(e)=>handlechange(e)} />
            <button type='submit'>Submit</button>
        </form>):
        phoneNumber && <div className='otp'>
            <span>OTP Sent to {phoneNumber}</span>
            <OTPForm otplen={4} onsubmit={otphandle} />
        </div>}
    </div>
  )
}

export default LoginPhone