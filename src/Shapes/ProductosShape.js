import React from "react";
import PropTypes from 'prop-types';

Card.propTypes = {
    producto: PropTypes.shape ({
        nombre : PropTypes.string,
        precio: PropTypes.number,
        img : PropTypes.string
    
    }