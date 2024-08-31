const CartReducer = (state, action) => {
  switch (action.type) {
    case "Add":
      return [...state, { ...action.product, quantity: 1 }];

    case "Remove":
      return state.filter((product) => product.id !== action.id);

    case "Increase":
      return state.map((product) =>
        product.id === action.id
          ? { ...product, quantity: product.quantity + 1 }
          : product
      );

    case "Decrease":
      return state.map((product) =>
        product.id === action.id && product.quantity > 1
          ? { ...product, quantity: product.quantity - 1 }
          : product
      );

    default:
      return state;
  }
};

export default CartReducer;
