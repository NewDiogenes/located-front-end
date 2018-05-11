import { connect } from 'react-redux';
import ProductListPage from '../components/ProductListPage/ProductListPage';
import { lightUpProduct } from '../actions/productActions';

const turnOnLight = (deviceUrl, productId) => fetch(`${ deviceUrl }/on/${ productId }`);
const turnOffLight = (deviceUrl, productId) => fetch(`${ deviceUrl }/off/${ productId }`);

export const mapDispatchToProps = (dispatch) => (
  {
    productEntryPressed: (productId, litProduct, device) => {
      turnOffLight(device.url, litProduct);
      turnOnLight(device.url, productId);
      console.log(`pressed productId: ${ productId }. OldProduct: ${ litProduct }`);
      dispatch(lightUpProduct(productId));
    },
  }
);

export const mapStateToProps = (state) => (
  {
    ...state.product,
    device: state.device,
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage);
