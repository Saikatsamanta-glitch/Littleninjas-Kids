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


const OffcanvasDrawer = ({ show, setShow }: any) => {
        var recaptchaVerifier="";
        const handleClose = () => { setShow(false) }
        const [phone, setphone] = useState<string>('')
        const [otp, setOtp] = useState<string>('');
        const [showchecker, setShowChecker] = useState<boolean>(true);
        const [disable, setDisable] = useState<boolean>(true);
        const data = useContext(Course_context)
        console.log(data)

        const checkBtn = (e) => {
                e.preventDefault();
                console.log(phone);
                recaptchaVerifier = new RecaptchaVerifier(
                        auth,
                        "recaptchaverifier",
                        {
                                size: "normal",
                                callback: (response: any) => {
                                        console.log(response);
                                        setTimeout(() => {
                                                setShowChecker(false)
                                        }, 500);

                                        // reCAPTCHA solved, allow signInWithPhoneNumber.
                                },
                        });
                

        };
        const confirmOtp = () => {
                signInWithPhoneNumber(auth, "+" + phone, recaptchaVerifier)
                        .then((confirmationResult) => {
                                confirmationResult.confirm(otp).then((result) => {
                                        // User signed in successfully.
                                        setDisable(false);
                                        alert("success")
                                        // ...
                                }).catch((error) => {
                                        // User couldn't sign in (bad verification code?)
                                        // ...
                                        alert("failed")
                                });
                        })
                        .catch(() => {

                        })
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
                                <div>
                                        <div className="mb-3">
                                                <Form.Label>Email address</Form.Label>
                                                <Form.Control type="email" placeholder="Enter email" />
                                                <Form.Text className="text-muted">
                                                        We'll never share your email with anyone else.
                                                </Form.Text>
                                        </div>

                                        <div className="mb-3" >
                                                <Form.Label>Name</Form.Label>
                                                <Form.Control type="text" placeholder="Name" />
                                        </div>
                                        <div className="mb-3">
                                                <Form.Select aria-label="Default select example">
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
                                        <div  id="recaptchaverifier"></div>
                                        {<> <OtpInput
                                                value={otp}
                                                onChange={setOtp}
                                                numInputs={6}
                                                renderSeparator={<span>-</span>}
                                                renderInput={(props) => <input {...props} /> }
                                        />
                                                <button onClick={confirmOtp}>otp </button> 
                                         </>}
                                        <div className="mb-3">
                                                <Form.Select aria-label="Default select example">
                                                        <option>Select Grade</option>
                                                        <option value='1'>Grade 1-5</option>
                                                        <option value='2'>Grade 6-10</option>
                                                        <option value='3'>Grade 10+</option>
                                                </Form.Select>

                                        </div>


                                        <Button disabled={disable} variant="primary" style={{ backgroundColor: 'orange', border: 'none' }}>
                                                Submit
                                        </Button>
                                </div>
                        </Offcanvas.Body>
                </Offcanvas>
        )
}

export default OffcanvasDrawer
