import React from 'react';

const SearchPanel = () => {
    return (
        <div className="col-lg-4 offset-2">
            <form
                className="shop__search"
                //onChange={e => searchForm(e.target.value)}
                //value={value}
            >
                <label className="shop__search-label" forhtml="filter">Looking for</label>
                <input id="filter" type="text" placeholder="start typing here..." className="shop__search-input"/>
            </form>
        </div>
    )
}

export default SearchPanel;