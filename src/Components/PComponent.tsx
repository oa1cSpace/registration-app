import * as React from 'react';

const PComponent:React.FunctionComponent <any> = ({text, className}) => {
    // const {text, className} = props;
    return (
        <p className={className}>{text}</p>
    );
}

export default PComponent;
