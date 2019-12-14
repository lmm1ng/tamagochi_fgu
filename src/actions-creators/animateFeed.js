import { animateFeedHero } from '../actions/animateHero';
import {toFeedHero} from '../actions/actionsButtons';

const srcs = [
  'images/anim1/1.png',
  'images/anim1/2.png',
  'images/anim1/3.png',
  'images/anim1/4.png',
  'images/anim1/5.png',
  'images/anim1/6.png',
  'images/anim1/7.png',
  'images/anim1/8.png',
  'images/anim1/9.png',
  'images/anim1/10.png',
  'images/anim1/11.png',
  'images/anim1/12.png',
  'images/anim1/13.png',
  'images/anim1/14.png',
  'images/anim1/15.png',
  'images/anim1/16.png',
  'images/anim1/17.png',
  'images/anim1/18.png',
  'images/anim1/19.png',
  'images/anim1/20.png',
  'images/static/static.png'
];

// eslint-disable-next-line import/prefer-default-export
export function animateFeed() {
  return dispatch => {
    let time = 0;
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i <= srcs.length -1; i++) {
      setTimeout(() => dispatch(animateFeedHero(srcs[i])), time);
      time += 70;
    }
    dispatch(toFeedHero());
  };
}
