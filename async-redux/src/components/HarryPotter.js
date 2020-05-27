// https://www.potterapi.com/sortingHat

import React from 'react';
import { fetchData } from '../actions/index';
import { connect } from 'react-redux';

const HarryPotter = props => {
    return(
        <div>
            <button className="findBtn" onClick={() => props.fetchData()}>Find your Hogwarts house!</button>
            {props.error && (
                <div style={{ color: 'red' }}>*error loading data*</div>
            )}
            <div>
                <h2 className="house">{props.newHouse}</h2>                
                {/* .map(house => {
                    return (
                        // <div>
                        <h2>{house.newHouse}</h2>
                        // </div>
                    )
                })} */}
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        newHouse: state.newHouse,
        error: state.error
    }
}

export default connect(
    mapStateToProps,
    { fetchData }
)(HarryPotter);