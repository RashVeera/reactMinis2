import { useState } from 'react';
import './App.css';
import BasicInfo from './components/BasicInfo';
import Feedback from './components/Feedback';
import Confirmation from './components/Confirmation';
import emailjs from "emailjs-com";

function App() {
  const [page,setpage]=useState(0)
  const formTitles=["Basic Information","Feedback Information","Confirmation"]


  const [formData,setformData]=useState({
    name:"",
    email:"",
    subject:"",
    message:"",
    rating:""
  })

  
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .send(
        process.env.REACT_APP_SERVICE_ID, // Replace with your EmailJS service ID
        process.env.REACT_APP_TEMPLATE_ID, // Replace with your EmailJS template ID
        {
          name:formData.name,
          email:formData.email,
          message: formData.message,
          rating: formData.rating,
        },
        process.env.REACT_APP_USER_ID // Replace with your EmailJS user ID
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Form submitted successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("Failed to submit the form. Please try again.");
        }
      );
  };


  const pageDisplay =()=>{
   if(page===0){
    return <BasicInfo formData={formData} setformData={setformData}/>
   }
   else if(page===1){
    return <Feedback formData={formData} setformData={setformData}/>
   }
   else{
    return <Confirmation formData={formData} setformData={setformData}/>
   }
  }
  return (
    <div className="App">
      <div className='progressbar'>
        <div style={{width:`${(page+1)/(formTitles.length)*100}%`,height:"100%"}}></div>
      </div>
      <form  onSubmit={sendEmail}  className='formContainer'>
        <div className='header'>{formTitles[page]}</div>
        <div className='body'>
          {pageDisplay()}
        </div>
        <div className='footer'>
        <button
          disabled={page === 0}
          onClick={(e) => {
            e.preventDefault();
            setpage((currPage) => currPage - 1);
          }}
        >
          Prev
        </button>

        {page === formTitles.length - 1 ? (
          <button type="submit">Submit</button>
        ) : (
          <button
            onClick={(e) => {
              e.preventDefault();
              setpage((currPage) => currPage + 1);
            }}
          >
            Next
          </button>
        )}
        </div>
      </form>
    </div>
  );
}

export default App;
