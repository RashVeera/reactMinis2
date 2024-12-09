import React from 'react'

const Feedback = ({formData,setformData}) => {
  return (
    <div className='feedback'>
        <input type='text' placeholder='Subject' value={formData.subject} onChange={(e)=>{setformData({...formData,subject:e.target.value})}}/>
        <textarea rows={3} cols={30} placeholder='Write your feedback or inquiry here...'
        value={formData.message} onChange={(e)=>{setformData({...formData,message:e.target.value})}}/>
                <select id="rating" value={formData.rating} onChange={(e)=>{setformData({...formData,rating:e.target.value});console.log(e)}} name="rating" required>
            <option value="">Select Rating</option>
            <option value="excellent">Excellent</option>
            <option value="good">Good</option>
            <option value="average">Average</option>
            <option value="poor">Poor</option>
            </select>

    </div>
  )
}

export default Feedback