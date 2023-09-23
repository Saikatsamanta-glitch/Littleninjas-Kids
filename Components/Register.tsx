import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import auth from "../firebaseconfig";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
function RegisterCanva({ show, setShow }: any) {
        const [phone, setPhone] = useState<string>("+918884058513");
        const [otp, setOtp] = useState<string>("");
        const [showchecker,setShowChecker]=useState<boolean>(true);
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);

        const checkBtn = () => {

                var recaptchaVerifier =new RecaptchaVerifier(
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
                signInWithPhoneNumber(auth, phone, recaptchaVerifier)
                        .then((confirmationResult) => {
                                confirmationResult.confirm(otp).then((result) => {
                                        // User signed in successfully.
                                        const user = result.user;
                                        // ...
                                }).catch((error) => {
                                        // User couldn't sign in (bad verification code?)
                                        // ...
                                });
                        })
                        .catch(() => {

                        })

        };

        return (
                <>
                        <Offcanvas
                                className="w-52"
                                show={show}
                                placement={"end"}
                                onHide={handleClose}
                        >
                                <Offcanvas.Header closeButton>
                                        <Offcanvas.Title>
                                                {" "}
                                                <img src="/brand.png" alt="" className="h-11" /> LittleNinjas{" "}
                                        </Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body>
                                        Some text as placeholder. In real life you can have the elements you
                                        have chosen. Like, text, images, lists, etc.
                                        <div className={showchecker?"block":"hidden"} id="recaptchaverifier"></div>
                                        <button onClick={checkBtn}>Check</button>
                                </Offcanvas.Body>
                        </Offcanvas>
                </>
        );
}

export default RegisterCanva;
