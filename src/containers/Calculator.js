import { connect } from 'react-redux';
import { Calculator } from '../components';
import {
  updatePrice,
  updateTotal,
  updateAmount,
  updateOrder,
} from '../actions/calculator';

const mapStateToProps = (state) => ({
  menus: state.menus,
});

const mapDispatchToProps = (dispatch) => ({
  updatePrice: () => dispatch(updatePrice()),
  updateTotal: () => dispatch(updateTotal()),
  updateAmount: () => dispatch(updateAmount()),
  updateOrder: () => dispatch(updateOrder()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Calculator);
