import React from 'react';

class BtnBackHome extends React.Component {
  render() {
    const {text,type} = this.props;

    return (
      <div className="d-flex justify-content-between mt-3">
        <button className="btn text-white" type={type}>{text}</button>
      </div>
    );
  }
}

export default BtnBackHome;
