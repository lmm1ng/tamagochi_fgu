import { connect } from 'react-redux';
import progressComp from '../components/progress/index';
import {toZeroHero} from '../actions/actionsButtons';

export default connect(
  state => ({
    progressStatus: state.progress.status,
  }),
  {toZero:toZeroHero}
)(progressComp);