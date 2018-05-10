
const initialState = {
  productList: [
    {
      productName: 'Dura Flexible Hose Water 1/2" Hex 300mm',
      price: '$5.67',
      productId: 107602,
    },
    {
      productName: 'B-Press Water Straight Connector 20mm',
      price: '$14.08',
      productId: 404601,
    },
    {
      productName: 'B-Press Water Equal Tee 20mm',
      price: '$14.08',
      productId: 404613,
    },
    {
      productName: 'B-Press Water Wall Plate Elbow 15mm x 1/2" Female BSP',
      price: '$20.63',
      productId: 404650,
    },
    {
      productName: 'Kembla Hard Drawn Copper Tube (3/4") 20mm x 1.02mm x 6mtr Plain Type B',
      price: '$68.41',
      productId: 801215,
    },
    {
      productName: 'DWV In Pipe Bend Male & Female 40mm x 88 Degree',
      price: '$4.02',
      productId: 1403706,
    },
    {
      productName: 'DWV Bend 50mm x 85 Degree Male & Female',
      price: '$3.47',
      productId: 1403715,
    },
    {
      productName: 'Dura Short P Trap 50mm',
      price: '$12.10',
      productId: 1409123,
    },
    {
      productName: 'Arco Grifo Garden Tap with Non Return Valve Male 20mm',
      price: '$24.95',
      productId: 2131530,
    },
    {
      productName: 'Rothenberger No.35 Tube Cutter 6-35mm',
      price: '$89.00',
      productId: 7700025,
    },
    {
      productName: 'Rothenberger 3000/4000 B-Press Jaw 20mm',
      price: '$198.34',
      productId: 7701184,
    },
    {
      productName: 'Rothenberger Universal Internal/External Deburrer 6-35mm',
      price: '$89.00',
      productId: 7705168,
    },
  ],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
  default:
    return state;
  }
};

export default productReducer;
