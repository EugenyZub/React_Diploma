import React, {Component} from 'react';
// import Spinner from '../spinner';
// import Error from '../error';
import {connect} from 'react-redux';
import WithDiplomaService from '../hoc';
// import {itemsDetails} from '../../actions';
import {Link} from 'react-router-dom';
class BestsellersListItem extends Component {

    render () {
        const {bestsellersItem, moreDetails} = this.props;
        // const view = error ? <Error/> : loading ? <Spinner/> : 
        //             !(loading || error) && <View bestsellersItem={bestsellersItem}/>; 
        return (
            <Link 
                to='/itempage'
                onClick={() => moreDetails()}
                className="best__item" 
                style={{textDecoration: 'none'}}
            >
                
                {/* {view} */}
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