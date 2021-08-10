import React from 'react';
import './Flexbox.css';
import Home from '@material-ui/icons/Home';
import AnnouncementIcon from '@material-ui/icons/Announcement';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import InfoIcon from '@material-ui/icons/Info';


function Flexbox() {
    return (
        <div className="flex__container">
          <div className="flex__item"><Home />Home</div>
          <div className="flex__item"><AnnouncementIcon />News</div>
          <div className="flex__item"><InfoIcon/>About Us</div>
          <div className="flex__item"><ContactMailIcon/> Contact</div>

        </div>
    )
}

export default Flexbox
