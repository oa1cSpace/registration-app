import React from 'react';

class EmaileComponent extends React.Component {
  render() {
    const { text } = this.props;
    const { name } = this.props;
    const { type } = this.props;
    const { placeholder } = this.props;
    const { value } = this.props;
    const { onChange } = this.props;
    const { form } = this.props;

    return (
      <fieldset className="fieldset border">
        <legend className="registrationField__legend ml-2">{text}</legend>
        <input
          name={name}
          text={text}
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
}

export default EmaileComponent;
