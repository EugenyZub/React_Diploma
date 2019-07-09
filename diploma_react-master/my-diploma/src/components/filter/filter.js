import React, {Component} from 'react';
import {connect} from 'react-redux';
import WithDiplomaService from '../hoc';
import {filterItems} from '../../actions';

class Filter extends Component {
    render() {
        const {filterItems} = this.props;

        return (
            <div className="col-lg-4">
                <div className="shop__filter">
                    <div className="shop__filter-label">
                        Or filter
                    </div>
                    <div className="shop__filter-group">
                        <button className="shop__filter-btn" onClick={() => filterItems('Brazil')}>Brazil</button>
                        <button className="shop__filter-btn" onClick={() => filterItems('Kenya')}>Kenya</button>
                        <button className="shop__filter-btn" onClick={() => filterItems('Columbia')}>Columbia</button>
                    </div>
                </div>
            </div>
        )
    }    
}

const mapStateToProps = (state) => {
    return {
        bestsellersItems: state.items,
        error: state.error,
        loading: state.loading
    }
}

const mapDispatchToProps = {
    filterItems
};

export default WithDiplomaService()(connect(mapStateToProps, mapDispatchToProps)(Filter));