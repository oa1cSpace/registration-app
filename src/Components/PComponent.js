import React from 'react';

function PComponent(props)  {
    const { text, className } = props;

    return (
      <p className={className}>{text}</p>
    );
}

export default PComponent;
