import { animateTransformHero } from '../actions/animateHero';
import {toTransformHero} from '../actions/actionsButtons';

const srcs = [
  'images/anim2/1.png',
  'images/anim2/2.png',
  'images/anim2/3.png',
  'images/anim2/4.png',
  'images/anim2/5.png',
  'images/anim2/6.png',
  'images/anim2/7.png',
  'images/anim2/8.png',
  'images/anim2/9.png',
  'images/anim2/10.png',
  'images/anim2/11.png',
  'images/anim2/12.png',
  'images/anim2/13.png',
  'images/anim2/14.png',
  'images/anim2/15.png',
  'images/anim2/16.png',
  'images/anim2/17.png',
  'images/anim2/18.png',
  'images/anim2/19.png',
  'images/anim2/20.png',
  'images/anim2/21.png',
  'images/anim2/22.png',
  'images/anim2/23.png',
  'images/anim2/24.png',
  'images/anim2/25.png',
  'images/anim2/26.png',
  'images/anim2/27.png',
  'images/anim2/28.png',
  'images/anim2/29.png',
  'images/anim2/30.png',
  'images/anim2/31.png',
  'images/anim2/32.png',
  'images/anim2/33.png',
  'images/anim2/34.png',
  'images/anim2/35.png',
  'images/anim2/36.png',
  'images/anim2/37.png',
  'images/anim2/38.png',
  'images/anim2/39.png',
  'images/anim2/40.png',
  'images/static/static.png'
];

// eslint-disable-next-line import/prefer-default-export
export function animateTransform() {
  return dispatch => {
    let time = 0;
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i <= srcs.length -1; i++) {
      setTimeout(() => dispatch(animateTransformHero(srcs[i])), time);
      time += 50;
    }
    dispatch(toTransformHero());
  };
}
