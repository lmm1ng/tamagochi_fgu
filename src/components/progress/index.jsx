import React from 'react';
import './index.css';
import PropTypes from 'prop-types';
import { Progress, Button, Icon } from 'semantic-ui-react';

const ProgressComp = ({ progressStatus, toZero }) => (
  <div id="progress_section">
    <span id="head">KPI</span>
    <Progress id="progress" indicating progress='percent' percent={progressStatus} />
    <Button id='zero_button' onClick={toZero} color='red'>
      <Icon name="arrow alternate circle down outline" />
      Обнулить
    </Button>
  </div>
);

ProgressComp.propTypes = {
  progressStatus: PropTypes.number.isRequired,
  toZero: PropTypes.func.isRequired,
};

export default ProgressComp;
