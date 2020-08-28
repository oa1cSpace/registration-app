import * as React from 'react';

const NameComponent:React.FunctionComponent <any> = (props) => {
    const {text, type, pattern, placeholder, onChange, value, name, form} = props;

    return (
        <div className=" d-flex clm-2 justify-content-between ">
            <fieldset className="fieldset  border fname">
                <legend className="registrationField__legend ml-2">{text}</legend>
                <input
                    /*text={text}*/
                    type={type}
                    className="registrationField__input"
                    pattern={pattern}
                    placeholder={placeholder}
                    onChange={onChange}
                    value={value}
                    name={name}
                    form={form}
                />
            </fieldset>
        </div>
    );
}

export default NameComponent;
