import React from 'react';

class LoginComponent extends React.Component {
  render() {
    const {text,name,type,placeholder,value,onChange,form} = this.props;

    return (
      <fieldset className="fieldset border">
        <legend className="registrationField__legend ml-2">{text}</legend>
        <input
          text={text}
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
}

export default LoginComponent;
