import React from 'react'
import { Link } from 'react-router-dom'
function CardItem(props) {
    return (
        <>  
            {/* //To create the className like below , use "li.cards__items" command */}
            <li className="cards__item">
                <Link className="cards__item__link" to={props.path}>
                    <figure className="cards__item__pic-wrap" data-category={props.label}>  
                        {/* To create the following img, use "img.cards__item__img " */}
                        <img 
                         className="cards__item__img" 
                         src={props.src} 
                         alt="Travel Image" 
                        />
                    </figure>
                    {/* for div , the example below only needs ".cards__item__info" */}
                    <div className="cards__item__info">
                        {/* for h5, use "h5.cards__item__text" */}
                        <h5 className="cards__item__text">{props.text}</h5>
                    </div>
                </Link>
            </li>
        </>

    )
}

export default CardItem
