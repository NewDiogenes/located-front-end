import { connect } from 'react-redux';
import ProductListPage from '../components/ProductListPage/ProductListPage';

export const mapDispatchToProps = () => (
  {
  }
);

export const mapStateToProps = (state) => (
  {
    productList: state.product.productList,
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage);
