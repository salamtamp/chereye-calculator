import { connect } from 'react-redux';
import { Calculator } from '../components';
import {
  updatePrice,
  updateTotal,
  updateAmount,
  updateOrder,
} from '../actions/calculator';

const mapStateToProps = (state) => ({
  menus: state.calculator.menus,
});

const mapDispatchToProps = (dispatch) => ({
  updatePrice: (id, price) => dispatch(updatePrice(id, price)),
  updateAmount: (id, amount) => dispatch(updateAmount(id, amount)),
  updateTotal: () => dispatch(updateTotal()),
  updateOrder: () => dispatch(updateOrder()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Calculator);
