import React from 'react';

// class BtnComponents extends React.Component {
function BtnComponents(props) {
  // render() {
    const {text,type,onClick,className,value} = props;

    return (
      <button className={className} type={type} onClick={onClick} value={value}>{text}</button>

    );
  // }
}

export default BtnComponents;
