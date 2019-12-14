import React from 'react';
import './index.css';
import PropTypes from 'prop-types';
import { Button, Icon } from 'semantic-ui-react';

const Hero = ({ srcImage, toFeed, toTransform }) => (
  <div id='hero'>
    <div id="actionsButton">
      <Button onClick={toFeed} color="blue">
        <Icon name="food" />
        Покормить
      </Button>
      <Button onClick={toTransform} color="green">
        <Icon name="chevron circle up" />
        Преобразить
      </Button>
    </div>
    <div id="hero_section">
      <img alt="hero" src={srcImage} className="hero" />
    </div>
  </div>
);

Hero.propTypes = {
  srcImage: PropTypes.string.isRequired,
  toFeed: PropTypes.func.isRequired,
  toTransform: PropTypes.func.isRequired,
};

export default Hero;
