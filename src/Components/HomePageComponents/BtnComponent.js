import React from 'react';

// class BtnComponent extends React.Component {
function BtnComponent() {
  // render() {
  //   const { value } = this.props;
  //   const { className } = this.props;
  //   const { type } = this.props;
  //   const { text } = this.props;
  //   const { onClick } = this.props;
  //   const { onSubmit } = this.props;

  const {value, className, type, text, onClick, onSubmit} = props;

    return (
      <button
        type={type}
        className={className}
        onClick={onClick}
        onSubmit={onSubmit}
        value={value}
      >
        {text}
      </button>
    );
  // }
}

export default BtnComponent;
