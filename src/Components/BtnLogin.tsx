import * as React from 'react';
import {ReactElement} from "react";
import {BtnLoginInterface} from "../Interfaces/BtnLoginInterface";

const BtnLogin = (props: BtnLoginInterface): ReactElement => {
    const {text,type} = props;

    return (
      <div className="d-flex justify-content-between mt-3">
        <button className="btn text-white" type={type}>{text}</button>
      </div>
    );
}

export default BtnLogin;
