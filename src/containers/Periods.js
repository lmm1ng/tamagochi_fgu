import { connect } from 'react-redux';
import PeriodsComp from '../components/periods/index';
import { toUpper, toBig, toKid } from '../actions-creators/grows';

export default connect(
  state => ({
    progressStatus: state.progress.status,
  }),
  { goKid: toKid, goOverKid: toUpper, goBigKid: toBig }
)(PeriodsComp);
