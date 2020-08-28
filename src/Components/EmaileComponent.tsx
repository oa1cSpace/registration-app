import * as React from 'react';
import {ReactElement} from "react";
import {EmaileComponentInterface} from "../Interfaces/EmaileComponentInterface";

const EmaileComponent = (props: EmaileComponentInterface): ReactElement => {

    const {text, name, type, placeholder, value, onChange, form} = props;

    return (
        <fieldset className="fieldset border">
            <legend className="registrationField__legend ml-2">{text}</legend>
            <input
                name={name}
                // text={text}
                className="registrationField__input"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                type={type}
                form={form}
            />
        </fieldset>
    );
}

export default EmaileComponent;
