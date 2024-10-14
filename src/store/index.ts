import { configureStore } from "@reduxjs/toolkit";
import CartItemSlice from "./Slices/CartItemSlice";
import FilterItemSlice from "./Slices/FilterItemSlice";
const store = configureStore({
  reducer: {
    filteredItem: FilterItemSlice,
    cartItems: CartItemSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
