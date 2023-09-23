 'use client';

import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Offcanvas from 'react-bootstrap/Offcanvas';
import PhoneInput from 'react-phone-input-2'
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import 'react-phone-input-2/lib/style.css'
import { useContext } from 'react';
import { Course_context } from '@/context/course_context';
import OtpInput from 'react-otp-input';
const OffcanvasDrawer = ({show,setShow}:any) => {
    const handleClose = () =>{ setShow(false) }
    const [phone,setphone]=useState('')
    const [otp, setOtp] = useState('');
     const data=useContext(Course_context)
     console.log(data)
  return (
    <Offcanvas show={show} onHide={handleClose} placement='end' style={{width:'500px'}}>
    <Offcanvas.Header closeButton>
      <Offcanvas.Title>
        <img src="/brand.png" alt="" className='h-[60px]' />
        Enroll Now🙌</Offcanvas.Title>
    </Offcanvas.Header>
    <Offcanvas.Body>
        <p>Please Fill all the entries</p>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Name" />
      </Form.Group>
      <Form.Group className="mb-3">
      <Form.Select aria-label="Default select example">
      <option>Select Course</option>
       {
        data.map((obj,i)=>{
            return(
      <option value={i+1}>{obj.title}</option>
            )
        })
       }
      
    </Form.Select>
    
      </Form.Group>
      <Form.Group className="mb-3 flex">
      <PhoneInput
  country={'us'}
  value={phone}
  inputStyle={{height:'100%',width:'100%'}}
  containerStyle={{width:'60%'}}
  onChange={phone => setphone(phone)}
/>
<button variant="outline-secondary" id="button-addon2" className='bg-orange-500 border-none w-20 p-2 ml-4 text-white'>
          Check
        </button>
      </Form.Group>
      <OtpInput
      value={otp}
      onChange={setOtp}
      numInputs={6}
      renderSeparator={<span>-</span>}
      renderInput={(props) => <input {...props} />}
    />
      <Form.Group className="mb-3">
      <Form.Select aria-label="Default select example">
      <option>Select Grade</option>
        <option value='1'>Grade 1-5</option>
        <option value='2'>Grade 6-10</option>
        <option value='3'>Grade 10+</option>
    </Form.Select>
    
      </Form.Group>
     
      
      <Button variant="primary" type="submit" style={{backgroundColor:'orange',border:'none'}}>
        Submit
      </Button>
    </Form>
    </Offcanvas.Body>
  </Offcanvas>
  )
}

export default OffcanvasDrawer
