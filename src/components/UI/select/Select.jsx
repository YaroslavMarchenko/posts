import React from 'react';

const Select = (props) => {
    return (

        <select value={props.value}
                onChange={event => props.onChange(event.target.value)}>
            <option disabled value="">{props.defaultValue}</option>
            {props.options.map(option =>
                <option ket={option.value} value={option.value}>
                    {option.name}
                </option>)}
        </select>

    );
};

export default Select;