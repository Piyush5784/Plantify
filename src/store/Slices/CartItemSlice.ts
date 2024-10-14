import { AllItems } from "@/assets/Items";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type CartItem = {
  id: number;
  title: string;
  price: string;
  description: string;
  category: string;
  image: string;
  rating: number;
  quantity: number;
};

type initialStateType = {
  cartItems: CartItem[];
};

const initialState: initialStateType = {
  cartItems: [],
};

type actionType = {
  type: string;
  id: number;
};

const cartItemSlice = createSlice({
  name: "cartItems",
  initialState,
  reducers: {
    AddtoCart(state, action: PayloadAction<number>) {
      const Id = action.payload;
      const filterItem = AllItems.find((id) => id.id == Id);
      if (filterItem) {
        const itemAlreadyExits = state.cartItems.find(
          (id) => id.id == filterItem.id
        );
        if (itemAlreadyExits) {
          state.cartItems = state.cartItems.map((I) =>
            I.id === Id ? { ...I, quantity: I.quantity + 1 } : I
          );
        } else {
          state.cartItems = [
            ...state.cartItems,
            { ...filterItem, quantity: 1 },
          ];
        }
      }
    },
    RemoveFromCart(state, action: PayloadAction<number>) {
      const filteredCartItem = state.cartItems.filter(
        (I) => I.id !== action.payload
      );
      state.cartItems = filteredCartItem;
    },
    DecreaseQuantity(state, action: PayloadAction<number>) {
      const Id = action.payload;
      const filterItem = state.cartItems.find((I) => I.id == Id)?.quantity;
      const updatedCartItems = state.cartItems.filter((I) => I.id !== Id);
      if (filterItem === 1) {
        state.cartItems = updatedCartItems;
      } else {
        const newUpdatedCartItems = state.cartItems.map((I) =>
          I.id === Id ? { ...I, quantity: I.quantity - 1 } : I
        );
        state.cartItems = newUpdatedCartItems;
      }
    },
    clearAllItems(state) {
      state.cartItems = [];
    },
  },
});

export const { clearAllItems, AddtoCart, DecreaseQuantity, RemoveFromCart } =
  cartItemSlice.actions;

export default cartItemSlice.reducer;
