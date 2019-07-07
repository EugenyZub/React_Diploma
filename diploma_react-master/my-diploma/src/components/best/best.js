import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import WithRestoService from '../hoc';
import {menuLoaded, menuRequested, menuError} from '../../actions';
import Spinner from '../spinner'
import BestsellersListItem from '../bestsellers-list-item';
class Best extends Component {

    componentDidMount() {
        this.props.menuRequested();
        const {RestoService} = this.props;
        RestoService.getBestsellers()
            .then(res => this.props.menuLoaded(res))
            .catch(() => this.props.menuError())
    }

   render() {
        const {menuItems, loading, error} = this.props;
                                        
        console.log(menuItems);
        if (loading) {
            return <Spinner/>
        }

        // if (error) {
        //     return (
        //         <div className='whiteText'>Возникла непредвиденная ошибка!</div>
        //     )
        // }

        return (
            <section className="best">
                <div className="container">
                    <div className="title">Our best</div>
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1">
                            <div className="best__wrapper">
                                {
                                    
                                    menuItems.map(menuItem => {
                                        return  <BestsellersListItem 
                                                    key={menuItem.id} 
                                                    menuItem={menuItem}
                                                    // url={menuItem.url}
                                                />
                                    })
                                }
                            </div>
                        </div>
                    </div>
               </div>
            </section>


        // <section className="best">
        //   <div className="container">
        //       <div className="title">Our best</div>
        //       <div className="row">
        //           <div className="col-lg-10 offset-lg-1">
        //               <div className="best__wrapper">
    //                         {/* <Link to="/itempage" style={{textDecoration: 'none'}}> */}
    //                             <Link to="/itempage" className="best__item" style={{textDecoration: 'none'}}>
    //                                 <img src="https://www.sciencenews.org/sites/default/files/main/articles/100315_coffee_opener_NEW_0.jpg" alt="coffee"/>
    //                                 <div className="best__item-title">
    //                                     Solimo Coffee Beans 2kg
    //                                 </div>
    //                                 <div className="best__item-price">10.73$</div>
    //                             </Link>
    //                         {/* </Link> */}
    //                       <div className="best__item">
    //                           <img src="https://www.sciencenews.org/sites/default/files/main/articles/100315_coffee_opener_NEW_0.jpg" alt="coffee"/>
    //                           <div className="best__item-title">
    //                               Presto Coffee Beans 1kg
    //                           </div>
    //                           <div className="best__item-price">15.99$</div>
    //                       </div>
    //                       <div className="best__item">
    //                           <img src="https://www.sciencenews.org/sites/default/files/main/articles/100315_coffee_opener_NEW_0.jpg" alt="coffee"/>
    //                           <div className="best__item-title">
    //                               AROMISTICO Coffee 1kg
    //                           </div>
    //                           <div className="best__item-price">6.99$</div>
    //                       </div>
    //                   </div>
    //               </div>
    //           </div>
    //       </div>
    //   </section>
        )
   }
}

const mapStateToProps = (state) => {
    return {
        menuItems: state.menu,
        loading: state.loading,
        error: state.error
    }
}

const mapDispatchToProps = {
    menuLoaded,
    menuRequested,
    menuError,
};

export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(Best));