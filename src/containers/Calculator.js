import { connect } from 'react-redux';
import { Calculator } from '../components';
import {
  updateTotal,
  updateOrder,
  updatePriceWithUpdateTotalAndOrder,
  updateAmountWithUpdateTotalAndOrder,
} from '../actions/calculator';

const mapStateToProps = (state) => ({
  menus: state.calculator.menus,
});

const mapDispatchToProps = (dispatch) => ({
  updatePrice: (id, price) => dispatch(updatePriceWithUpdateTotalAndOrder(id, price)),
  updateAmount: (id, amount) => dispatch(updateAmountWithUpdateTotalAndOrder(id, amount)),
  updateTotal: () => dispatch(updateTotal()),
  updateOrder: () => dispatch(updateOrder()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Calculator);
