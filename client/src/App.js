

import React, {useState, useEffect} from 'react';


import Form from './components/Form';
import Item from './components/Item';
import ReverseItem from './components/ReverseItem';
// import Review from './components/Review';
import axios from 'axios';

export default function App(){


    useEffect(() => {
        const parallaxSections = document.querySelectorAll('.parallax');
    
        const handleScroll = () => {
          const scrollY = window.scrollY;
    
          parallaxSections.forEach((section, index) => {
            const speed = 0.2; // Adjust the speed as needed
            const translateY = scrollY * speed;
            section.style.transform = `translateY(${translateY}px)`;
          });
        };
    

    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
    
    const [toSend, setToSend] = useState({
        
        email: '',
        name: '',
        
      });
    
    
      const sendEmail = async () => {
        try {
          const response = await axios.post('/send-email', {
            to: toSend.email,
            // Other email-related data
          });
          console.log(response.data);
        } catch (error) {
          console.error(error);
        }
      };

    const handleForm = (e) => {
       
        setToSend({ ...toSend, [e.target.name]: e.target.value });
        
    }

    return(
        <div className='page'>
            
    <div className="container parallax">
    <header className="row">
        
        <h1>- Olga Thijssen -<br></br> School of Neurographic Thought</h1>
    </header>
    
        <div className="row cover section1">
            <div className="col-md-6">
        
            
            <img src="/images/Neurographic-art1.webp" width={0.3} />
            
    </div>
    <div className="col-md-6 list">
        <h2>My Values</h2>
        <div className='divider'></div>
       <span> <strong>1-2-1 Coaching</strong> - Step by step guide through your first neurographic canvas to foster personal development</span>

       <span> <strong>Insight</strong> - Identifying and scoping in pain points that need improvement</span>

       <span> <strong>Critical Thinking</strong> - Sift through the fakes and frauds offering pie in the sky.
        With me you will learn to break down and point to specific patterns and decipher their purpose </span>
    </div>
    </div>
    <div className="row main section2">
        <h2>Testimonials and Examples</h2>
        <Item impath="/images/neurog1.jpg" author="Marina Malkovikna" text="After a discussion at length about the state of Marina's family, she was able to produce a new emotion in the form of this neurographic"/>
        <ReverseItem impath="/images/neurog2.jpg" author="Author2" text="prompt2"/>
        <Item impath="/images/neurog3.jpg" author="Author3" text="prompt3"/>
        
        




    </div>
    <div className="row">
            <p>For the Curious but careful minds - Receive a free PDF via email</p>
            <form  method="post" onSubmit={sendEmail} >
            <label htmlFor="name"> Name</label><br/>
            <input type="text" name='name' id="name" value={toSend.name} onChange={handleForm} required/><br/>

            <label htmlFor="email">Email</label><br/>
            <input type="email" name='email' id="email" value={toSend.email} onChange={handleForm} required/><br/>
            <br></br>
            <button className='blue' type='submit'>Receive PDF</button>
            </form>
        <br/>
        
    </div>

    <div className="row users section2">

            <strong>WARNING - beyond is for those willing to take the leap</strong>

        <p>Interested in learning how to imprint your psyche on the page? <br></br>
             fill in the form to book a free 30 minute consultation with me as your guide</p>
        <Form />
            
            
    </div>
        <div className='row review'>
            {/* <Review/> */}
        </div>
        <br/>
    </div>
    </div>
    )

}

