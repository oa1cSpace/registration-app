import React from 'react';

class PComponent extends React.Component {
  render() {
    const { text } = this.props;
    const { className } = this.props;

    return (
      <p className={className}>{text}</p>

    );
  }
}

export default PComponent;
