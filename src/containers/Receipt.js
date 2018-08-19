import { connect } from 'react-redux';
import { Receipt } from '../components';

const mapStateToProps = (state) => ({
  orders: state.orders,
});

export default connect(mapStateToProps)(Receipt);
