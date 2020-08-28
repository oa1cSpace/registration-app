import * as React from 'react';
import {ReactElement} from "react";

const BtnBackHome = (props : {type: 'button' | 'submit' | 'reset' | undefined, text: string}): ReactElement => {

    const {text, type} = props;

    return (
        <div className="d-flex justify-content-between mt-3">
            <button className="btn text-white" type={type}>{text}</button>
        </div>
    );
}

export default BtnBackHome;
