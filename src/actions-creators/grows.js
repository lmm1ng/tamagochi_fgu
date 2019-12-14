import { goKid, goOverKid, goBigKid } from '../actions/animateHero';
import { toZeroHero, toGrowUpper, toGrowBig } from '../actions/actionsButtons';

export function toUpper() {
  return dispatch => {
    dispatch(goOverKid());
    dispatch(toGrowUpper());
  };
}

export function toBig() {
  return dispatch => {
    dispatch(goBigKid());
    dispatch(toGrowBig());
  };
}

export function toKid() {
  return dispatch => {
    dispatch(goKid());
    dispatch(toZeroHero());
  };
}
