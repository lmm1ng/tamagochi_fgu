// eslint-disable-next-line import/prefer-default-export
export const animateFeedHero = string => ({
  type: 'ANIMATE_FEED',
  payload: string,
});
export const animateTransformHero = string => ({
  type: 'ANIMATE_TRANSFORM',
  payload: string,
});

export const goKid = () => ({
  type: 'GO_KID',
  payload: 'images/static/static.png',
});
export const goOverKid = () => ({
  type: 'GO_OVER_KID',
  payload: 'images/static/Vzroslee.png',
});
export const goBigKid = () => ({
  type: 'GO_BIG_KID',
  payload: 'images/static/Dyadya.png',
});
