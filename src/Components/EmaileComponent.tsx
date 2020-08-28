import * as React from 'react';

const EmaileComponent:React.FunctionComponent <any> = (props) => {

    const {text,name,type,placeholder,value,onChange,form} = props;

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
