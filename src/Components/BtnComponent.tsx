import * as React from 'react';
import {BtnComponentInterface} from "../Interfaces/BtnComponentInterface";

const BtnComponent = (props: BtnComponentInterface) => {
    const {type, text, onClick, className, value} = props;

    return (
        <button
            className={className}
            type={type}
            onClick={onClick}
            value={value}>{text}
        </button>
    );
}

export default BtnComponent;
