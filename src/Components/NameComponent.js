import React from 'react';

class NameComponent extends React.Component {
  render() {
    const { text } = this.props;
    const { type } = this.props;
    const { pattern } = this.props;
    const { placeholder } = this.props;
    const { onChange } = this.props;
    const { value } = this.props;
    const { name } = this.props;
    const { form } = this.props;

    return (
      <div className=" d-flex clm-2 justify-content-between ">
        <fieldset className="fieldset  border fname">
          <legend className="registrationField__legend ml-2">{text}</legend>
          <input
            text={text}
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
}

export default NameComponent;
