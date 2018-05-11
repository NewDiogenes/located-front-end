import { ACTION_TYPES } from '../actions/deviceActions';

export const DEVICES = {
  VIVID: {
    url: 'http://192.168.1.152:5000',
    color: 'redDevice',
  },
  LOCATED: {
    url: 'http://192.168.1.136:5000',
    color: 'greenDevice',
  },
};
const initState = { ...DEVICES.VIVID };

const deviceSelectReducer = (state = initState, action) => {
  switch (action.type) {
  case ACTION_TYPES.CHANGE_DEVICE:
    return { ...state, ...action.payload.device };
  default:
    return state;
  }
};

export default deviceSelectReducer;
