

import React, {useState, useRef} from 'react';
import { send, sendForm } from 'emailjs-com';
import emailjs from '@emailjs/browser';


function Form() {


    const [toSend, setToSend] = useState({
        name: '',
        email: '',
        message: '',
        extra: '',
        options: 'Select an Option',
      });


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(toSend);
    send(
      "service_iryb57a",
      "template_vjk0znj",
      toSend,
      '6whHcU3NoQSrGV7PG'
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch((err) => {
        console.log('FAILED...', err.text);
      });
      alert('Your message was successfully sent!')
    }

    const handleForm = (e) => {
       
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    }

    

    return (
        <div>
            {/* using Gmail service_iryb57a as an endpoint to send emails from*/}
          <form  method="post" onSubmit={handleSubmit} >
            <label htmlFor="name"> Name</label><br/>
            <input type="text" name='name' id="name" value={toSend.name} onChange={handleForm} required/><br/>

            <label htmlFor="email">Email</label><br/>
            <input type="email" name='email' id="email" value={toSend.email} onChange={handleForm} required/><br/>
            
        <label htmlFor="options">What is your neurographic adventure about?</label><br/>
            <select id="options" 
                    name="options" 
                    value={toSend.options}
                    onChange={handleForm}>
                <option value="Social & Relationships"> Social & Relationships </option>
                <option value="Money Management"> Money Management</option>
                <option value="Career Development"> Career Development</option>
                <option value="Mental Prosperity"> Mental Prosperity</option>
                <option value="Past Experiences"> Past Experiences</option>
                <option value="Other"> Other</option>
                <option value="Unsure"> Unsure/Curious</option>


            </select><br></br>
            {toSend.options.valueOf() === "Other" ? <div>
                <label htmlFor="extra">Your Message</label><br/>
            <textarea id='extra' 
                      name='extra' 
                      value={toSend.extra} 
                      onChange={handleForm} 
                      placeholder="If other, tell me why">
            </textarea>
            </div> : <div></div>}

            <label htmlFor="message">Your Message</label><br/>
            <textarea id="message"
                      name='message' 
                      required 
                      cols="30" 
                      rows="10" 
                      value={toSend.message} 
                      onChange={handleForm} 
                      placeholder="paint a graphic of words">
                      </textarea><br/>
                      <div style={{margin:"10px"}}></div>
            <button className="green" type="submit" >Send Message</button><br></br>
            <div style={{margin:"10px"}}></div>
            
        </form>  
        </div>
    );
}

export default Form;