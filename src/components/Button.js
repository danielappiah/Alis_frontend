import React from 'react';
import PropTypes from 'prop-types';


const Button = (props) => (
    <div className="form-group">
        <input
            className="form-control"
            name={props.name}
            type={props.inputType}
            value={props.content}
            onChange={props.controlFunc}
            placeholder={props.placeholder}/>
    </div>
);

SingleInput.propTypes = {
    inputType: PropTypes.oneOf(['text', 'number', 'email', 'password']).isRequired,
    name: PropTypes.string.isRequired,
    controlFunc: PropTypes.func.isRequired,
    content: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]).isRequired,
    placeholder: PropTypes.string,
};

export default SingleInput;