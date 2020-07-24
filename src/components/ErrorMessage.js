import React from "react";
import PropTypes from 'prop-types';

const ErrorMessage = ({mensaje}) => {
    return (
        <p className="red darken-4 error">{mensaje}</p>
    );
};

ErrorMessage.propTypes = {
    mensaje: PropTypes.string.isRequired
};

export default ErrorMessage;