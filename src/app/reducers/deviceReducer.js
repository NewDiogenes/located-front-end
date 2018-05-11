

const DEVICES = {
  VIVID: {
    url: 'http://192.168.1.152:5000',
    color: 'red',
  },
  LOCATED: {
    url: 'http://192.168.1.136:5000',
    color: 'green',
  },
};
const initState = { ...DEVICES.VIVID };

const deviceSelectReducer = (state = initState) => state;

export default deviceSelectReducer;
