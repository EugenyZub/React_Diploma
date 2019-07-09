import React, {Component} from 'react';
// import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import WithDiplomaService from '../hoc';
import {itemsLoaded, itemsRequested, itemsError, itemsDetails} from '../../actions';
import Spinner from '../spinner';
import BestsellersListItem from '../bestsellers-list-item';
class Best extends Component {

    componentDidMount() {
        this.props.itemsRequested();
        const {DiplomaService} = this.props;
        DiplomaService.getBestsellers()
            .then(res => this.props.itemsLoaded(res))
            .catch(() => this.props.itemsError())
    }

   render() {
        const {bestsellersItems, itemsDetails, error, loading} = this.props;   

        if (loading) {
            return <Spinner/>
        }

        if (error) {
            return (
                <div className='whiteText'>Возникла непредвиденная ошибка!</div>
            )
        }

        return (
            <section className="best">
                <div className="container">
                    <div className="title">Our best</div>
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1">
                            <div className="best__wrapper">
                                {                             
                                    bestsellersItems.map(bestsellersItem => {
                                        const id = bestsellersItem.url.slice(bestsellersItem.url.indexOf('I') + 2,
                                                                             bestsellersItem.url.indexOf('_') - 1);
                                        return  <BestsellersListItem
                                                    key={id} 
                                                    bestsellersItem={bestsellersItem}
                                                    moreDetails={() => itemsDetails(id)}
                                                />
                                    })
                                }
                            </div>
                        </div>
                    </div>
               </div>
            </section>
        )
   }
}

const mapStateToProps = (state) => {
    return {
        bestsellersItems: state.items,
        error: state.error,
        loading: state.loading,
    }
}

const mapDispatchToProps = {
    itemsLoaded,
    itemsRequested,
    itemsError,
    itemsDetails
};

export default WithDiplomaService()(connect(mapStateToProps, mapDispatchToProps)(Best));