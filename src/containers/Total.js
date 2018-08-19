import { connect } from 'react-redux';
import { Total } from '../components';

const mapStateToProps = (state) => ({
  total: state.total,
});

export default connect(mapStateToProps)(Total);
