import React from 'react';

// class BtnLogin extends React.Component {
function BtnLogin(props) {
  // render() {
    const {text,type} = props;

    return (
      <div className="d-flex justify-content-between mt-3">
        <button className="btn text-white" type={type}>{text}</button>
      </div>
    );
  // }
}

export default BtnLogin;
