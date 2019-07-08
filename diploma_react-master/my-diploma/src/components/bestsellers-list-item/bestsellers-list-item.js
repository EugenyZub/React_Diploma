import React, {Component} from 'react';
// import Spinner from '../spinner';
// import Error from '../error';
import {connect} from 'react-redux';
import WithRestoService from '../hoc';
// import {itemsDetails} from '../../actions';
// import {Link} from 'react-router-dom';
class BestsellersListItem extends Component {

    // componentDidCatch() {
    //     return <Error/>
    // }

    render () {
        const {bestsellersItem, moreDetails} = this.props;
        // const view = error ? <Error/> : loading ? <Spinner/> : 
        //             !(loading || error) && <View menuItem={menuItem}/>; 
        return (
            <div 
                // to='/itempage'
                onClick={() => moreDetails()}
                className="best__item" 
                // style={{textDecoration: 'none'}}
            >
                {/* {view} */}
                <View bestsellersItem={bestsellersItem}/>
            </div>
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

export default WithRestoService()(connect(mapStateToProps)(BestsellersListItem));
//export default BestsellersListItem;