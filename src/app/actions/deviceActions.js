export const ACTION_TYPES = {
  LIGHT_UP_PRODUCT: 'LIGHT_UP_PRODUCT',
};

export const lightUpProduct = (productId) => (
  {
    type: ACTION_TYPES.LIGHT_UP_PRODUCT,
    payload: {
      productId,
    },
  }
);
