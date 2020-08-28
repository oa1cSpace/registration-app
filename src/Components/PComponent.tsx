import * as React from 'react';
import {PComponentInterface} from "../Interfaces/PComponentInterface";
import {ReactElement} from "react";

const PComponent = (props: PComponentInterface): ReactElement => {
    const {text, className} = props;

    return (
        <p className={className}>{text}</p>
    );
}

export default PComponent;
