import React from 'react';
import './index.css';
import PropTypes from 'prop-types';
import {Button} from 'semantic-ui-react';

const Periods = ({goKid, goOverKid, goBigKid}) => (
  <div id='periods_bar'>
    <Button color='orange' className='period_button' id='kid' onClick={goKid}>Ребёнок</Button>
    <Button color='orange' className='period_button' id='over_kid' onClick={goOverKid}>Подросток</Button>
    <Button color='orange' className='period_button' id='big_kid' onClick={goBigKid}>Взрослый</Button>

  </div>
);

Periods.propTypes = {
  goKid: PropTypes.func.isRequired,
  goOverKid:PropTypes.func.isRequired,
  goBigKid:PropTypes.func.isRequired,
};

export default Periods;