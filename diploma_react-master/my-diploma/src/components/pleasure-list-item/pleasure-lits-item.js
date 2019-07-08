import React from 'react';

const GoodsListItem = ({goodsItem}) => {
    const {name, price, url} = goodsItem;

    return (
        <div className="shop__item">
            <img src={url} alt={name}/>
            <div className="shop__item-title">
                {name}
            </div>
            <div className="shop__item-price">{price}</div>
        </div>
    )
}

export default GoodsListItem;