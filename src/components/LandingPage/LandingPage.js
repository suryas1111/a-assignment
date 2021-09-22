import React from 'react';
import './LandingPage.scss';
import PropTypes from 'prop-types';

const MainPage=(props)=>{
    return (
        
            <div className="svg-wrapper"  onClick={props.openContact}> 
            <svg height="60" width="320">
                <rect className="shape" height="60" width="317" />
                <text x="65" y="37" className="text">CONTACTS</text>
            </svg>
            </div>
        
        );
}

MainPage.propTypes={
    openContact:PropTypes.func
}

export default MainPage;
