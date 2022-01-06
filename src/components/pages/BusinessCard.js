import React from 'react'
import { Link } from 'react-router-dom'
import './BusinessCard.css'


function BusinessCard(props) {
    return (
        <>  
            {/* <div className="business_card_items__pic-wrap" > */}
                <div className="card-wrapper">
                    <div className="row">
                        {/* Profile Pi */}
                        <div className="card-profile">
                            <img src={props.src}  alt="Profile Pic" />
                            <p className="personal-background-in-foto" style={{fontSize:'70%', marginBottom:'5px'}}>
                                I have been working on developing Computer vision and AI-related Software Development for 
                                two years, including employing pose estimation AI model on PC and Mobile Device using C++ and Swift. In the previous year, I have involved 
                                in Website Backend API Development and Server Employment using Laravel Php Framework and Docker Compose. 
                            </p>
                        </div>

                        {/* <div className="col-sm-1 card-profile-color"></div> */}

                        {/* Description */}
                        <div className="card-description">
                            
                            <div className="header">
                                <button className="hello-btn">
                                    <span> HELLO </span>
                                    <span className="green-dot">
                                    {/* <span className="visually-hidden">New alerts</span> */}
                                    </span>
                                </button>

                                <p className="m-0">I'm <span style={{weight : "bold", fontSize : "150%"}}>Louis Chan</span></p>
                                <p style={{fontSize:'90%', marginBottom:'5px', fontStyle:'italic'}}>Software Developer / Research Assistant</p>
                                <p className="personal-background" style={{fontSize:'70%', marginBottom:'5px'}}>
                                I have been working on developing Computer vision and AI-related Software Development for 
                                two years, including employing pose estimation AI model on PC and Mobile Device using C++ and Swift. In the previous year, I have involved 
                                in Website Backend API Development and Server Employment using Laravel Php Framework and Docker Compose. 
                                </p>

                            </div>

                            <div className="content">
                                <div className="info-header-content-setting">
                                    <div className="info-header">AGE</div>
                                    <div className="info-content">25</div>
                                </div>

                                <div className="info-header-content-setting">
                                    <div className="info-header">E-MAIL</div>
                                    <div className="info-content">wing.987.hk@gmail.com</div>
                                </div>

                                <div className="info-header-content-setting">
                                    <div className="info-header">Education</div>
                                    <div className="info-content">B.Eng(Electrical), Msc(Info. Tech.)</div>
                                </div>

                                {/* <div className="info-header-content-setting">
                                    <div className="info-header">FREELANCE</div>
                                    <div className="info-content">Available</div>       
                                </div> */}
                                
                                <div className="info-header-content-setting">
                                    <div className="info-header mt-4">
                                        <button className="status-btn btn-success">Studying in PolyU</button>
                                    </div>
                                    <div className="col-sm-2 card-description-color"></div>
                                    <div className="info-content mt-4">
                                        <i className="fas fa-calendar"></i>
                                        <div className="col-sm-2 card-description-color"></div>
                                        <span>till April 15.2021</span>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                    
                    <div className="footer_wrapper">
                        <div className="footer">
                            {/* <Link className="icon-wrapper social-icon-link facebook" 
                            to="/"
                            target="_blank"
                            aria-label="Facebook"
                            >
                                <i className="fab fa-facebook-f">

                                </i>
                            </Link> */}

                            {/* <Link
                            className='icon-wrapper social-icon-link instagram'
                            to='/'
                            target='_blank'
                            aria-label='Instagram'
                            >
                            <i className='fab fa-instagram' />
                            </Link> */}

                            <Link
                            className='icon-wrapper social-icon-link youtube'
                            to='/'
                            target='_blank'
                            aria-label='Youtube'
                            to={{pathname: 'https://www.youtube.com/channel/UC8HpnGA5wV22TSLeotulMcg' }}
                            >
                            <i className='fab fa-youtube' />
                            </Link>

                            <Link
                            className='icon-wrapper social-icon-link github'
                            to='/'
                            target='_blank'
                            aria-label='Github'
                            >
                            <i className='fab fa-github' />
                            </Link>

                            <Link
                            className='icon-wrapper social-icon-link linkedin'
                            to='/'
                            target='_blank'
                            aria-label='LinkedIn'
                            >
                            <i className='fab fa-linkedin' />
                            </Link>
                        </div>

                    </div>
                    

                </div>
            {/* </div> */}
        </>
    )
}

export default BusinessCard
