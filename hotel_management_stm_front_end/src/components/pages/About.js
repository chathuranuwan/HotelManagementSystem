import React from 'react'
import Navbar from "../Navbar";
import "../../App.css";
import ImgAbout from "../../assets/images/img-about.jpg";
import "./About.css";

 

function About() {
  return (
  
    <div>
         
      <Navbar />
      
        
        <div className='about'>
        <div
        className="aboutTop"
        style={{ backgroundImage: "url(${ImgAbout})" }}
      ></div>     
          <div className =  "aboutBottom">
            <div className='row'>
              <div className='col-md-12 text-center'>
              
                          
                <h1 className='main-heading'>Hotel Grand</h1>
                <div className = "underline mx-auto"></div>
                <p> 
                With a stay at Hotel Grand in Unawatuna, you'll be near the beach, within a 5-minute drive of Unawatuna Beach and Sahana Beach. Featured amenities include complimentary newspapers in the lobby, dry cleaning/laundry services, and a 24-hour front desk. Guests may use a roundtrip airport shuttle for a surcharge, and free self parking is available onsite.
                </p>
                    
                    </div>
              </div>
            </div>
                                     
        </div>
       

        <div className='about bg-c-light border-top'>
          <div className =  "container">
            <div className='row'>
              <div className='col-md-12 mb-4 text-center'>
                <h1 className='main-heading'>Vision, Mission and Values</h1>
                <div className = "underline mx-auto"></div>
                </div>

                <div className='col-md-4 text-center'>
                  <h2>Our Vision</h2>
                <p>
                The ideology of our vision is to continue to apply and set the highest standards of service quality and in that way justify and uphold the reputation that we have among the guests, partners, competitors and the wider community. We use and constantly introduce environmentally friendly technologies and processes in order to remain in balance with nature and also meet the needs of contemporary society.Tradition is a testament to our success but in the future we also want to embrace the changes that modern time brings and become more attractive in the market and more interesting to our guests and partners.                
                </p>
              </div>

              <div className='col-md-4 text-center'>
                  <h2>Our Mission</h2>
                <p>
                The mission of the Hotel Grand is to put hospitality services on the highest level in order to satisfy the demands and expectations of guests. Our aim is to make the Hotel Grand a place for encounters, business success, pleasant meetings and gala ceremonies.                
                </p>
              </div>

                <div className='col-md-4 text-center'>
                  <h2>Our Values</h2>
                <p>
                The Hotel Grand holds the following values and beliefs: </p>

<p>Exceptional Service - We understand that the value can be created with every encounter and this is reflected in our superior standard of service.</p>

<p>Integrity - We are honest and straightforward in our interactions with our owners, guests, colleagues and the communities in which we operate.</p>

<p>Respect - We respect the objectives of our stakeholders, the values of our guests, and the cultural difference in the locations that we operate.</p>

<p>Teamwork and Passion - We bring our individual expertise, creativity and passion for our industry as a Marco Polo team member.  This sets us apart and is the essence of the Marco Polo Way.</p>

<p>Continuous Improvement - We are innovative and utilize best practices to continually improve our management techniques, and the quality of our products and services. </p>            
                
                </div>
                
            </div>
            
          </div>
                  
        </div>
        </div>
  )
}

export default About