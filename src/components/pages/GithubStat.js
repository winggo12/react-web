import React from 'react'
import '../../App.css'

export default function GithubStat() {
    return(
        <div className="github-stat">
        <h1> Github Statistics </h1>
        <embed className="github-stat-file"
            src="../documents/GithubProfileSummary.pdf"
            type="application/pdf"
        />
        </div>
    );
    }