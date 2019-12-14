import { combineReducers } from 'redux';
import hero from './hero';
import progress from './progress';

export default combineReducers({ hero, progress });
