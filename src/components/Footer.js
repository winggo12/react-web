import React from 'react'
import { Link } from 'react-router-dom';

import { Button } from './Button'
import './Footer.css'

function Footer() {
    return (
        <div className="footer-container">
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Leave your message along with email here if you have any question
                </p>
                <p className="footer-subscription-text">
                    I will reply as soon as possible
                </p>

                <div className="input-areas">
                    <form>
                        <input type="email" name="email" placeholder="Your Emails"
                        className="footer-input" />
                        <input type="email" name="email" placeholder="Questions"
                        className="footer-input" />
                        <Button className="send-btn" buttonStyle='btn--outline'>Send</Button>
                    </form>
                </div>

            </section>

            <div class='footer-links'>
                <div className='footer-link-wrapper'>
                    <div class='footer-link-items'>
                        <h2>Social Media</h2>
                        <Link to={{pathname: 'https://www.youtube.com/channel/UC8HpnGA5wV22TSLeotulMcg' }}>Youtube</Link>
                        <Link to={{pathname: 'https://github.com/winggo12' }}>Github</Link>
                        <Link to={{pathname: 'https://www.linkedin.com/in/louis-chan-58ba74149/' }}>Linkedin</Link>

                    </div>
                    <div class='footer-link-items'>
                        <h2>Contact</h2>
                        <Link to='/'>wing.987.hk@gmail.com</Link>
                        {/* <Link to='/'>Support</Link>
                        <Link to='/'>Destinations</Link>
                        <Link to='/'>Sponsorships</Link> */}
                    </div>
                </div>

                {/* <div className='footer-link-wrapper'>
                    <div class='footer-link-items'>
                        <h2>Videos</h2>
                        <Link to='/'>Submit Video</Link>
                        <Link to='/'>Ambassadors</Link>
                        <Link to='/'>Agency</Link>
                        <Link to='/'>Influencer</Link>
                    </div>
                    <div class='footer-link-items'>
                        <h2>Social Media</h2>
                        <Link to='/'>Instagram</Link>
                        <Link to='/'>Facebook</Link>
                        <Link to='/'>Youtube</Link>
                        <Link to='/'>Twitter</Link>
                    </div>
                </div> */}
            </div>

            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link to="/react-web/" className="social-logo">
                            Luis Chan  <i class="fas fa-laptop-code"></i>
                        </Link>
                    </div>
                    <small className="website-rights">
                        Luis Chan © 2021
                    </small>
                    <div className="social-icons">
                        {/* <Link className="social-icon-link facebook" 
                        to="/"
                        target="_blank"
                        aria-label="Facebook"
                        >
                            <i className="fab fa-facebook-f">

                            </i>
                        </Link> */}

                        {/* <Link
                        class='social-icon-link instagram'
                        to='/'
                        target='_blank'
                        aria-label='Instagram'
                        >
                        <i class='fab fa-instagram' />
                        </Link> */}
                        <Link
                        class='social-icon-link youtube'
                        to={{pathname: 'https://www.youtube.com/channel/UC8HpnGA5wV22TSLeotulMcg' }}
                        target='_blank'
                        aria-label='Youtube'
                        >
                        <i class='fab fa-youtube' />
                        </Link>
                        <Link
                        class='social-icon-link github'
                        to={{pathname: 'https://github.com/winggo12' }}
                        target='_blank'
                        aria-label='Github'
                        >
                        <i class='fab fa-github' />
                        </Link>
                        <Link
                        class='social-icon-link linkedin'
                        to={{pathname: 'https://www.linkedin.com/in/louis-chan-58ba74149/' }}
                        target='_blank'
                        aria-label='LinkedIn'
                        >
                        <i class='fab fa-linkedin' />
                        </Link>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Footer
