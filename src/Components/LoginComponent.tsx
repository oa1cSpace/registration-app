import * as React from 'react';
import {LoginComponentInterface} from "../Interfaces/LoginComponentInterface";
import {ReactElement} from "react";

const LoginComponent = (props: LoginComponentInterface): ReactElement => {
    const {text, name, type, placeholder, value, onChange, form} = props;

    return (
        <fieldset className="fieldset border">
            <legend className="registrationField__legend ml-2">{text}</legend>
            <input
                /* text={text}*/
                name={name}
                type={type}
                className="registrationField__input"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                form={form}
            />
        </fieldset>
    );
}

export default LoginComponent;
