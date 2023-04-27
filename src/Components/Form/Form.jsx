import React, { useState } from 'react'
import './Form.css'


// const[selects,setselects]=useState()



const Form = () => {

    const [selects, setselects] = useState();
  return (

    <div className="all-form stratum">
        <div className="title">
            <h1>Enrollment Form</h1>
        </div>
        <div className="info">
            <p>
            Welcome to TSAA Drone Academy, A Govt.of Telangana Enterprise Our Drone Academy is Govt (DGCA) approved Drone Pilot Training institute. Our flagship Drone Pilot Training Course leads to Drone Pilot Certification. Drone Pilot Certification is a must to fly any drone in India as per Govt of India regulations. Flying any drone without a Drone pilot Certification is punishable offence in India. Other than Drone Pilot Certification course, we also undertake specialized job oriented, domain specific skill courses. Filling up this form does not automatically entail admission.
            </p>
            <p>Admissions are primarily on “first-come-first-served” basis, which again depends on our training capacity and logistic bandwidth, however we will strive to induct and train all eligible applicants. Our associate will reach you through phone and discuss possible training schedule plans/options.</p>
        </div>
        <div className="form">
            <form>
                
                <div className="inputs">
                    <div className="label">
                        <label>First Name</label>
                        <span><sup>*</sup></span>
                    </div>
                    <div className="input">
                        <input type='text' placeholder='Enter your first name' />
                    </div>
                </div>
                <div className="inputs">
                    <div className="label">
                        <label>Last Name</label>
                        <span><sup>*</sup></span>
                    </div>
                    <div className="input">
                        <input type='text' placeholder='Enter your last name' />
                    </div>
                </div>
                <div className="inputs">
                    <div className="label">
                        <label>Email ID</label>
                        <span><sup>*</sup></span>
                    </div>
                    <div className="input">
                        <input type='text' placeholder='Enter Your Email id here' required />
                    </div>
                </div>
                <div className="inputs">
                    <div className="label">
                        <label>Qualification</label>
                        <span><sup>*</sup></span>
                    </div>
                    <div className="input">
                        <input type='text' placeholder='Enter your Qualification here' />
                    </div>
                </div>
                <div className="inputs">
                    <div className="label">
                        <label>Courses(s) interested in</label>
                        <span><sup>*</sup></span>
                    </div>
                    <div className="input">
                    <select value={selects} onChange={e=>setselects(e.target.value)} >
                         <option >Select Course</option>
                      
                         <option >Drone</option>
                         <option >Hi</option>

                         <option >By</option>

                         <option >Letter</option>

                    </select>
                </div>
                </div>
                <div className="inputs">
                    <div className="label">
                        <label>Mobile No</label>
                        <span><sup>*</sup></span>
                    </div>
                    <div className="input">
                        <input type='tel' placeholder='Enter your mobile number here' />
                    </div>
                </div>
                <div className="inputs">
                    <div className="label">
                        <label>Address</label>
                        <span><sup>*</sup></span>
                    </div>
                    <div className="input">
                        <input type='text' placeholder='Enter your address here' />
                    </div>
                </div>
                <div className="inputs">
                    <div className="label">
                        <label>Pincode</label>
                        <span><sup>*</sup></span>
                    </div>
                    <div className="input">
                        <input type="tel" name='email'  pattern="[0-9]*"  max="999999"  className='form__tab-input' placeholder='Enter your pincode here'  required/>
                    </div>
                   
                </div>
                


            </form>
        </div>
    </div>
  )
}

export default Form