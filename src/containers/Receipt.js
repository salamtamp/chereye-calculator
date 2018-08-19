import { connect } from 'react-redux';
import { Receipt } from '../components';

const mapStateToProps = (state) => ({
  orders: state.calculator.orders,
});

export default connect(mapStateToProps)(Receipt);
