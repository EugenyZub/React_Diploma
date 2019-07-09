import React from 'react';

const Filter = () => {
    return (
        <div className="col-lg-4">
            <div className="shop__filter">
                <div className="shop__filter-label">
                    Or filter
                </div>
                <div className="shop__filter-group">
                    <button className="shop__filter-btn" >Brazil</button>
                    <button className="shop__filter-btn" >Kenya</button>
                    <button className="shop__filter-btn" >Columbia</button>
                </div>
            </div>
        </div>
    )
}

export default Filter;