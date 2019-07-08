import React from 'react';
import {Link} from 'react-router-dom';

const CoffeeItemList = ({coffeeItem, moreDetails}) => {
    const {name, country, price, url} = coffeeItem;

    return (
        <div onClick={() => moreDetails()}
            //to='/itempage'
            className="shop__item"
            // style={{textDecoration: 'none'}}
        >
            <img src={url} alt={name}/>
            <div className="shop__item-title">
                {name}
            </div>
            <div className="shop__item-country">{country}</div>
            <div className="shop__item-price">{price}</div>
        </div>
    )   
} 

export default CoffeeItemList;