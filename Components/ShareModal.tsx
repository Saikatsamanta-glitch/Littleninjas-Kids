import React, { useState } from 'react'
import {
    EmailShareButton, EmailIcon,
    FacebookShareButton, FacebookIcon,
    TelegramShareButton, TelegramIcon,
    TwitterShareButton, TwitterIcon,
    WhatsappShareButton, WhatsappIcon,
    RedditShareButton, RedditIcon
} from 'react-share'
const ShareModal = ({url}:any) => {
  
   
  return (
        
        
 <div className="d-flex justify-center px-4 py-2 absolute bottom-[-20px] w-full gap-x-7 z-50">
 <FacebookShareButton
   url={url}
 >
   <FacebookIcon size={32} round />
 </FacebookShareButton>
 <TwitterShareButton url={url} >
             <TwitterIcon round={true} size={32} />
         </TwitterShareButton>

         <EmailShareButton url={url} >
             <EmailIcon round={true} size={32} />
         </EmailShareButton>

         <TelegramShareButton url={url} >
             <TelegramIcon round={true} size={32} />
         </TelegramShareButton>

         <WhatsappShareButton url={url} >
             <WhatsappIcon round={true} size={32} />
         </WhatsappShareButton>
</div>
        
        
    
   
  )
}

export default ShareModal
