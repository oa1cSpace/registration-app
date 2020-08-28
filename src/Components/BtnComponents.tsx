import * as React from 'react';

const BtnComponents:React.FunctionComponent <any> = (props) => {
    const {type, text, onClick, className, value} = props;

    return (
      <button className={className} type={type} onClick={onClick} value={value}>{text}</button>

    );
}

export default BtnComponents;
