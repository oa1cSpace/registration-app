import * as React from 'react';

const BtnLogin:React.FunctionComponent <any> = (props) => {
    const {text,type} = props;

    return (
      <div className="d-flex justify-content-between mt-3">
        <button className="btn text-white" type={type}>{text}</button>
      </div>
    );
}

export default BtnLogin;
