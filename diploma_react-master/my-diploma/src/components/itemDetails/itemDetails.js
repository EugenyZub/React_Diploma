import React from 'react';

const ItemDetails = ({itemDetails}) => {
    const {name, url, price} = itemDetails;

    return (
        <>
            <div className="col-lg-5 offset-1">
                <img className="shop__girl" src={url} alt={name}/>
            </div>
            <div className="col-lg-4">
                <div className="title">About it</div>
                <img className="beanslogo" src="../../logo/Beans_logo_dark.svg" alt="Beans logo"/>
                <div className="shop__point">
                    <span>Country: </span>
                    Brazil
                </div>
                <div className="shop__point">
                    <span>Description: </span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
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