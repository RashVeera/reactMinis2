import React from 'react'

const Confirmation = ({formData,setformData}) => {
  return (
    <div className='confirmation'>
        <p>Name: {formData.name} </p>
        <p>Email: {formData.email} </p>
        <p>Rating: {formData.rating.charAt(0).toUpperCase()+formData.rating.slice(1)} </p>
    </div>
  )
}

export default Confirmation