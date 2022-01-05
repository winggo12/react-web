import React from 'react'
import '../../App.css'

export default function PersonalCV() {
    return(
        <div className="personal-cv">
        <h1> Resume </h1>
        <iframe className="personal-cv-file"
            src="https://connectpolyu-my.sharepoint.com/personal/20007633g_connect_polyu_hk/_layouts/15/Doc.aspx?sourcedoc={114bb542-1cc7-4077-b3cb-4a07bd81a513}&amp;action=embedview"
            frameborder="0">This is an embedded 
            <a target="_blank" href="https://office.com">Microsoft Office</a> document, powered by <a target="_blank" href="https://office.com/webapps">Office</a>.
        </iframe>
        </div>
    );
    }