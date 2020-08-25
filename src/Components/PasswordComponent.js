import React from 'react';

// class PasswordComponent extends React.Component {
function PasswordComponent(props) {
  // render() {
  //   const { text } = this.props;
  //   const { type } = this.props;
  //   const { value } = this.props;
  //   const { onChange } = this.props;
  //   const { form } = this.props;
  //   const { name } = this.props;

    const { text,type,value,onChange,form,name } = props;


    return (
      <fieldset className="fieldset border">
        <legend className="registrationField__legend ml-2">{text}</legend>
        <input
          text={text}
          type={type}
          className="registrationField__input"
          value={value}
          onChange={onChange}
          form={form}
          name={name}
        />
      </fieldset>
    );
  // }
}

export default PasswordComponent;
