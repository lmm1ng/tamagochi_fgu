import { connect } from 'react-redux';
import HeroComp from '../components/hero/index';

import {animateFeed} from '../actions-creators/animateFeed';
import {animateTransform} from '../actions-creators/animateTransform';

export default connect(
  state => ({
    srcImage: state.hero.srcImage,
  }),
  { toFeed: animateFeed, toTransform: animateTransform }
)(HeroComp);
