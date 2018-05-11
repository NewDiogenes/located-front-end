export const ACTION_TYPES = {
  CHANGE_DEVICE: 'CHANGE_DEVICE',
};

export const changeDevice = (device) => (
  {
    type: ACTION_TYPES.CHANGE_DEVICE,
    payload: {
      device,
    },
  }
);
