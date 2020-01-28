import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Loader.css';

export default function Loader() {
  return (
    <div className="Loader_">
      <FontAwesomeIcon size="3x" icon="sync-alt" className="Loader_spinnerIcon rotate" />
    </div>
  );
}
