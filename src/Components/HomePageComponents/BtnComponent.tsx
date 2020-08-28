import * as React from 'react';

const BtnComponent: React.FunctionComponent <any> = ({value, className, type, text, onClick, onSubmit}) => {

  // const {value, className, type, text, onClick, onSubmit} = props;

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
}

export default BtnComponent;
