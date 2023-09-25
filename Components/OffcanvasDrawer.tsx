'use client';
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Offcanvas from 'react-bootstrap/Offcanvas';
import PhoneInput from 'react-phone-input-2'
import { useContext } from 'react';
import { Course_context } from '@/context/course_context';
import OtpInput from 'react-otp-input';
import auth from "../firebaseconfig";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';

const OffcanvasDrawer = ({ show, setShow }: any) => {
       let recaptchaVerifier=null
        const handleClose = () => { 
            setShowChecker(true)
            setOtp('')
            setphone('')
            setShow(false) }
        const [phone, setphone] = useState<string>('')
        const [otp, setOtp] = useState<string>('');
        const [showchecker, setShowChecker] = useState<boolean>(true);
        const [disable, setDisable] = useState<boolean>(true);
        const [confirmResult,setconfirm]=useState()
        const data = useContext(Course_context)
        console.log(showchecker)

        const checkBtn = (e) => {
                e.preventDefault();
                console.log(phone);
              
                      recaptchaVerifier = new RecaptchaVerifier(
                        auth,
                                "recaptcha",
                                {
                                        size: "normal",
                                        callback: (response: any) => {
                                                console.log(response);
                                                getOtp()
                                                setTimeout(() => {
                                                        setShowChecker(false)
                                                }, 500);
        
                                                // reCAPTCHA solved, allow signInWithPhoneNumber.
                                        },
                                },
                                
                                
                                );
                           
               recaptchaVerifier.render()

        };
        const getOtp = () => {
                signInWithPhoneNumber(auth, "+" + phone, recaptchaVerifier)
                        .then((confirmationResult) => {
                                console.log(confirmationResult,'confirm')
                                toast.success('otp sent successfully')
                              setconfirm(confirmationResult)
                                
                        })
                        .catch((err) => {
                                toast.error(err.message)
                        })
        }
       const confirmOtp=(e)=>{
        e.preventDefault()
        confirmResult?.confirm(otp).then((result) => {
            // User signed in successfully.
            console.log(result)
            setDisable(false);
            setShowChecker(true)
            toast.success('otp verified successfully')
            // ...
    }).catch((error) => {
            // User couldn't sign in (bad verification code?)
            // ...
            toast.error('oops! Something went wrong')
    });
       }
    const submitRegistration=(e)=>{
        e.preventDefault();
        alert('submit')
    }


        return (
                <Offcanvas show={show} onHide={handleClose} placement='end' style={{ width: '500px' }}>
                        <Offcanvas.Header closeButton>
                                <Offcanvas.Title>
                                        <img src="/brand.png" alt="" className='h-[60px]' />
                                        Enroll Now🙌</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                                <p>Please Fill all the entries</p>
                                <Form onSubmit={submitRegistration}>
                                        <div className="mb-3">
                                                <Form.Label>Email address</Form.Label>
                                                <Form.Control type="email" placeholder="Enter email" required />
                                                <Form.Text className="text-muted">
                                                        We'll never share your email with anyone else.
                                                </Form.Text>
                                        </div>

                                        <div className="mb-3" >
                                                <Form.Label>Name</Form.Label>
                                                <Form.Control type="text" placeholder="Name" required/>
                                        </div>
                                        <div className="mb-3">
                                                <Form.Select aria-label="Default select example" required>
                                                        <option>Select Course</option>
                                                        {
                                                                data.map((obj, i) => {
                                                                        return (
                                                                                <option value={i + 1}>{obj.title}</option>
                                                                        )
                                                                })
                                                        }

                                                </Form.Select>


                                        </div>
                                        <div className="mb-3 flex">
                                                <PhoneInput
                                                        country={'us'}
                                                        value={phone}
                                                        inputStyle={{ height: '100%', width: '100%' }}
                                                        containerStyle={{ width: '60%' }}
                                                        onChange={phone => setphone(phone)}
                                                />
                                                <button onClick={checkBtn} id="button-addon2" className=' bg-orange-500 border-none w-20 p-2 ml-4 text-white'>
                                                        Check
                                                </button>

                                        </div>
                                        {
                                         showchecker &&   <div  id="recaptcha"></div>
                                        }
                                      
                                        {
                                   !showchecker &&         <div className='flex w-full mb-3 md:flex-row flex-col'> <OtpInput
                                                value={otp}
                                                onChange={setOtp}
                                                numInputs={6}
                                                renderSeparator={<pre>  </pre>}
                                                renderInput={(props) => <input {...props} /> }
                                                containerStyle={{}}
                                                inputStyle={{border:'1px solid rgb(228,228,231)',width:'30px',outline:'none',opacity:1}}
                                        />
                                                <button onClick={confirmOtp} className=' bg-orange-500 border-none w-[100px] p-1 ml-4 text-white'>verify otp </button> 
                                         </div>}
                                        <div className="mb-3">
                                                <Form.Select aria-label="Default select example" required>
                                                        <option>Select Grade</option>
                                                        <option value='1'>Grade 1-5</option>
                                                        <option value='2'>Grade 6-10</option>
                                                        <option value='3'>Grade 10+</option>
                                                </Form.Select>

                                        </div>


                                        <Button disabled={disable} type='submit' variant="primary" style={{ backgroundColor: 'orange', border: 'none' }}>
                                                Submit
                                        </Button>
                                </Form>
                        </Offcanvas.Body>
                </Offcanvas>
        )
}

export default OffcanvasDrawer
