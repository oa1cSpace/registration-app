import * as React from 'react';
import {ReactElement} from "react";
import {BtnBackHomeInterface} from "../Interfaces/BtnBackHomeInterface";

const BtnBackHome = (props: BtnBackHomeInterface): ReactElement => {
// const BtnBackHome = (props: {text: string, type: 'reset'| 'submit' | 'button' | undefined}): ReactElement => {
    const {text, type} = props;

    return (
        <div className="d-flex justify-content-between mt-3">
            <button className="btn text-white" type={type}>{text}</button>
        </div>
    );
}

export default BtnBackHome;
