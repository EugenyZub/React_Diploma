import React, {Component} from 'react';
import {connect} from 'react-redux';
import WithDiplomaService from '../hoc';
import {searchForm} from '../../actions';

class SearchPanel extends Component {
    render() {
        const {searchForm} = this.props;

        return (
            <div className="col-lg-4 offset-2">
                <form
                    className="shop__search"
                    onChange={e => searchForm(e.target.value)}
                >
                    <label className="shop__search-label" forhtml="filter">Looking for</label>
                    <input id="filter" type="text" placeholder="start typing here..." className="shop__search-input"/>
                </form>
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
    searchForm
};

export default WithDiplomaService()(connect(mapStateToProps, mapDispatchToProps)(SearchPanel));