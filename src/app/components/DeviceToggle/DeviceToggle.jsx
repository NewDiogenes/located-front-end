import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { DEVICES } from '../../reducers/deviceReducer';

const DeviceToggle = ({
  className, litProduct, device, connectToDevice,
}) => (
  <div className={ className }>
    <button className='greenDevice' onClick={ () => connectToDevice(litProduct, device, DEVICES.LOCATED) }>Green</button>
    <button className='redDevice' onClick={ () => connectToDevice(litProduct, device, DEVICES.VIVID) }>Red</button>
  </div>
);

DeviceToggle.propTypes = {
  className: PropTypes.string.isRequired,
  litProduct: PropTypes.number.isRequired,
  device: PropTypes.shape({
    url: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
  }).isRequired,
  connectToDevice: PropTypes.func.isRequired,
};

export default styled(DeviceToggle)`
display: flex;
float: right;
box-sizing: border-box;
justify-items: center;
flex-direction: row;
align-items: center;
align-content: stretch;
height: 100%;
width 30%;

button {
    display: flex;
    font-size: 0.7em;
    flex: 1;
    flex-direction: column;
    text-align: center;
}

.greenDevice {
    background-color: green;
    color: white;
}

.redDevice {
    background-color: fireBrick;
    color: white;
}
`;
