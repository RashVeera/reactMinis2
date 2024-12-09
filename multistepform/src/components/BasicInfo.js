import React from 'react'

const BasicInfo = ({formData,setformData}) => {
  return (
    <div className='basicInfo'>
        <input type='text' placeholder='Name' value={formData.name} onChange={(e)=>{setformData({...formData,name:e.target.value})}} />
        <input type='email' placeholder='Email' value={formData.email} onChange={(e)=>{setformData({...formData,email:e.target.value})}}/>
    </div>
  )
}

export default BasicInfo