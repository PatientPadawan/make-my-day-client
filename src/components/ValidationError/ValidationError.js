import React from 'react';

export default function ValidationError(props) {
  const { message } = props;
  if (message) {
    return (
      <div className="error">{message}</div>
    );
  }
  return <></>;
}
