import React from 'react'
import '../../App.css'

export default function GithubStat() {
    return(
        <div className="github-stat">
        {/* <h1> Github Statistics </h1> */}
        <iframe className='github-stat-file'
            src="https://onedrive.live.com/embed?cid=A19854BC35135660&amp;resid=A19854BC35135660%214001&amp;authkey=AGxjL1CyVzRM8os&amp;em=2" 
            frameborder="0">This is an embedded 
            <a target="_blank" href="https://office.com">Microsoft Office</a> document, powered by <a target="_blank" href="https://office.com/webapps">Office</a>.
        </iframe>


        {/* <div data="https://github.com/winggo12?tab=repositories" class="github-pinner" ></div> */}

        {/* <iframe className="github-stat-file"
            src="../images/GithubProfileSummary.png" 
        /> */}

        </div>
    );
    }