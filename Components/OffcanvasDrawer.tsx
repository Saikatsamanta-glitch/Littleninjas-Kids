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
const OffcanvasDrawer = ({show,setShow}:any) => {
    const handleClose = () =>{ setShow(false) }
    const [phone,setphone]=useState('')
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
      <div  className="mb-3 flex justify-between  w-full">
      <Button variant="secondary" className='w-auto'>Grade 1-5</Button>
      <Button variant="secondary"  className='w-auto'>Grade 6-10</Button>
      <Button variant="secondary"  className='w-auto'>Grade 10+</Button>
    </div>
      <Form.Group className="mb-3 flex">
      <PhoneInput
  country={'us'}
  value={phone}
  inputStyle={{height:'100%',width:'100%'}}
  containerStyle={{width:'60%'}}
  onChange={phone => setphone(phone)}
/>
<Button variant="outline-secondary" id="button-addon2" style={{backgroundColor:'orange',border:'none',color:'white'}}>
          Button
        </Button>
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
