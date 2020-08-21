import React from 'react';

class BtnComponents extends React.Component {
  render() {
    const {text,type,onClick,className,value} = this.props;

    return (
      <button className={className} type={type} onClick={onClick} value={value}>{text}</button>

    );
  }
}

export default BtnComponents;
