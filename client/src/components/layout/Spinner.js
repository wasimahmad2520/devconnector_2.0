import React, { Fragment } from 'react';
import spinner from './spinner.gif';

const Spinner = () => (
  <Fragment>
    <img
      src={spinner}
      style={{ width: '200px', margin: 'auto', display: 'block' }}
      alt="Loading..."
    />
    <center><p>Loading Data</p></center>
  </Fragment>
);

export default Spinner;
