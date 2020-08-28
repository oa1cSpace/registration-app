import * as React from 'react';

const PasswordComponent:React.FunctionComponent <any> = ({text, type, value, onChange, form, name}) => {
    // const {text, type, value, onChange, form, name} = props;

    return (
        <fieldset className="fieldset border">
            <legend className="registrationField__legend ml-2">{text}</legend>
            <input
                /*text={text}*/
                type={type}
                className="registrationField__input"
                value={value}
                onChange={onChange}
                form={form}
                name={name}
            />
        </fieldset>
    );
}

export default PasswordComponent;
