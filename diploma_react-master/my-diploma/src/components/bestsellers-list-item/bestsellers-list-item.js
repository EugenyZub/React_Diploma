import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import WithDiplomaService from '../hoc';

class BestsellersListItem extends Component {

    render () {
        const {bestsellersItem, moreDetails} = this.props;
        return (
            <Link 
                to='/itempage'
                onClick={() => moreDetails()}
                className="best__item" 
                style={{textDecoration: 'none'}}
            >
                <View bestsellersItem={bestsellersItem}/>
            </Link>
        )
    }
}

const View = ({bestsellersItem}) => {
    const {name, price, url} = bestsellersItem;
    return (
        <>
            <img src={url} alt="name"/>
            <div className="best__item-title">
                {name}
            </div>
            <div className="best__item-price">{price}</div>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        bestsellersItems: state.items
    }
}

export default WithDiplomaService()(connect(mapStateToProps)(BestsellersListItem));