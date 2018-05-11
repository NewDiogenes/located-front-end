import { connect } from 'react-redux';
import DeviceToggle from '../components/DeviceToggle/DeviceToggle';
import { changeDevice } from '../actions/deviceActions';

const turnOffLight = (deviceUrl, productId) => fetch(`${ deviceUrl }/off/${ productId }`);
const turnOnLight = (deviceUrl, productId) => fetch(`${ deviceUrl }/on/${ productId }`);

export const mapDispatchToProps = (dispatch) => (
  {
    connectToDevice: (litProduct, device, newDevice) => {
      turnOffLight(device.url, litProduct);
      dispatch(changeDevice(newDevice));
      turnOnLight(newDevice.url, litProduct);
    },
  }
);

export const mapStateToProps = (state) => (
  {
    ...state.product,
    device: state.device,
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(DeviceToggle);
