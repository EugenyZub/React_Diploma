import React from 'react';

const BestsellersListItem = ({menuItem}) => {
    const {name, price, url} = menuItem;

    return (
        <div className="best__item">
            <img src={url} alt="name"/>
            <div className="best__item-title">
                {name}
            </div>
            <div className="best__item-price">{price}</div>
        </div>
    )
}

export default BestsellersListItem;