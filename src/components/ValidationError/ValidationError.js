import React from 'react';
import propTypes from 'prop-types';

export default function ValidationError(props) {
  const { message } = props;
  if (message) {
    return (
      <div className="error">{message}</div>
    );
  }
  return <></>;
}

ValidationError.propTypes = {
  message: propTypes.string,
};

ValidationError.defaultProps = {
  message: '',
};
