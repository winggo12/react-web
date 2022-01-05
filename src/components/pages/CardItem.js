import React from 'react'
import { Link } from 'react-router-dom'

function CardItem(props) {
    return (
        <>  
            {/* //To create the className like below , use "li.cards__items" command */}
            <li className="cards__item">
                <div className="cards__item__link" >

                    {/* for div , the example below only needs ".cards__item__info" */}
                    <div className="cards__item__info">
                        <div className='cards__item__icon'>
                            <Link
                                to={{pathname: props.path }}
                                target='_blank'
                                aria-label='Github'
                                >
                                {/* <i className='fab fa-github' />
                                {console.log(props.icon == 'github')} */}
                                {(() => {
                                if(props.icon == 'github'){return <i className='fab fa-github'/>}
                                if(props.icon == 'researchgate'){return <i className='fab fa-researchgate'/>}
                                return null;
                                })()}   
                            </Link>
                        </div>
                            {/* for h5, use "h5.cards__item__text" */}
                            <h5 className="cards__item__text">{props.text}</h5>
                    </div>

                    <figure className="cards__item__pic-wrap" data-category={props.label}>  


                        {(() => {
                        if (props.utubelink){
                            return (
                                <iframe 
                                className= "cards__item__img" 
                                width="560" height="315" 
                                src={props.utubelink} 
                                title="YouTube video player" frameborder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
                                gyroscope; picture-in-picture" allowfullscreen 
                                />
                            )
                        }

                        if (props.src){
                            return (
                            <img 
                            className="cards__item__img" 
                            src={props.src} 
                            alt="Travel Image" 
                            />
                            )
                        }
                        return null;
                        })()}   

                        <p class="cards__item__img__description">{props.description}</p>

                    </figure>
                </div>
            </li>
        </>

    )
}

export default CardItem
