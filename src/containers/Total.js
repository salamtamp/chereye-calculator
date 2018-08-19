import { connect } from 'react-redux';
import { Total } from '../components';

const mapStateToProps = (state) => ({
  total: state.calculator.total,
});

export default connect(mapStateToProps)(Total);
