import React from 'react';
import classes from './Gaintaining.module.scss';

function Gaintaining() {
  return (
    <div className={classes.gaintaining}>
      <h1 className={classes.gaintaining__title}>Gaintaining</h1>
      <p className={classes.gaintaining__description}>
        This calculator is "broad way" and not targeting indivudal.
        Nevertheless, it gives you a good starting point to work
      </p>
    </div>
  );
}

export default Gaintaining;
