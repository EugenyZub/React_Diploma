import React from 'react';

const ItemDetails = ({itemDetails}) => {
    const {name, url, price, country, description} = itemDetails;

    return (
        <>
            <div className="col-lg-5 offset-1">
                <img className="curent__img" src={url} alt={name}/>
            </div>
            <div className="col-lg-4">
                <div className="title">About it</div>
                <img className="beanslogo" src="../../logo/Beans_logo_dark.svg" alt="Beans logo"/>
                <div className="shop__point">
                    <span>Country: </span>
                    {country}
                </div>
                <div className="shop__point">
                    <span>Description: </span>
                    {description}
                </div>
                <div className="shop__point">
                    <span>Price: </span>
                    <span className="shop__point-price">{price}</span>
                </div>
            </div>
        </>
    )
}

export default ItemDetails;