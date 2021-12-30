import React from 'react'
import { Link } from 'react-router-dom'

function CardItem(props) {
    return (
        <>  
            {/* //To create the className like below , use "li.cards__items" command */}
            <li className="cards__item">
                <Link className="cards__item__link" to={props.path}>

                    {/* for div , the example below only needs ".cards__item__info" */}
                    <div className="cards__item__info">
                        <div className='cards__item__icon'>
                            <Link
                                to='/'
                                target='_blank'
                                aria-label='Youtube'
                                >
                                <i className='fab fa-github' />
                            </Link>
                        </div>
                            {/* for h5, use "h5.cards__item__text" */}
                            <h5 className="cards__item__text">{props.text}</h5>
                    </div>

                    <figure className="cards__item__pic-wrap" data-category={props.label}>  
                        {/* To create the following img, use "img.cards__item__img " */}
                        if (props.src) {
                            <img 
                            className="cards__item__img" 
                            src={props.src} 
                            alt="Travel Image" 
                            />
                        }

            {(() => {
              if (props.utubelink){
                  return (
                      <h3>data</h3>
                  )
              }
              return null;
            })()}   

                        if (props.utubelink){
                            <iframe 
                            className= "cards__item__img" 
                            src={props.utubelink} 
                            title="YouTube video player" frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
                            gyroscope; picture-in-picture" allowfullscreen 
                            />
                        }

                        <p class="cards__item__img__description">{props.description}</p>

                    </figure>
                </Link>
            </li>
        </>

    )
}

export default CardItem
