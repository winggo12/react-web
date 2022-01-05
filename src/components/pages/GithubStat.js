import React from 'react'
import '../../App.css'

export default function GithubStat() {
    return(
        <div className="github-stat">
        {/* <h1> Github Statistics </h1> */}
        <iframe className='github-stat-file'
            src="https://connectpolyu-my.sharepoint.com/personal/20007633g_connect_polyu_hk/_layouts/15/Doc.aspx?sourcedoc={ba4f0899-d0b9-4739-bbe0-77a1e80bdf54}&amp;action=embedview" 
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