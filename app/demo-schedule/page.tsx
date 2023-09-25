"use client"
import { useEffect } from 'react';

function Schedule() {
        
        useEffect(() => {
                // Add the Calendly script tag to the DOM
                const script = document.createElement('script');
                script.type = 'text/javascript';
                script.src = 'https://assets.calendly.com/assets/external/widget.js';
                script.async = true;
                document.body.appendChild(script);
            
                return () => {
                  // Clean up the script tag when the component is unmounted
                  document.body.removeChild(script);
                };
              }, []);
return (
    <>
        <div className="calendly-inline-widget" data-url="https://calendly.com/littleninjas-contact/demo_session" style={{minWidth:'320px',height:'700px'}}></div>
    </>
  );
}

export default Schedule;