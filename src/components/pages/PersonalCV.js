import React from 'react'
import '../../App.css'

export default function PersonalCV() {
    return(
        <div className="personal-cv">
        {/* <h1> Resume </h1> */}
        <iframe className="personal-cv-file"
            src="https://onedrive.live.com/embed?resid=A19854BC35135660%213998&amp;authkey=%21AL8GvUenzPiKaMI&amp;em=2"
            frameborder="0">This is an embedded 
            <a target="_blank" href="https://office.com">Microsoft Office</a> document, powered by <a target="_blank" href="https://office.com/webapps">Office</a>.
        </iframe>
        </div>
    );
    }