import { AllItems } from "@/assets/Items";
import { ItemsType } from "@/types/itemsType";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type initialStateType = {
  FilterItems: ItemsType[];
  sortedOrder: "AtoZ" | "ZtoA";
  selectedCategories: category;
  selectedStars: 1 | 2 | 3 | 4 | 5 | null;
};
type category =
  | "Indoor Plants"
  | "Succulents"
  | "Climbers"
  | "Ferns"
  | "Herbs"
  | "All"
  | null;

const initialState: initialStateType = {
  FilterItems: AllItems,
  sortedOrder: "AtoZ",
  selectedCategories: "All",
  selectedStars: null,
};

type actionType = {
  payload: {
    type?: any;
    payload: string;
  };
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setfilterAtoZ(state) {
      const selectedFilter = state.FilterItems.sort((a, b) =>
        a.title.localeCompare(b.title)
      );
      state.FilterItems = selectedFilter;
      state.sortedOrder = "AtoZ";
    },
    All(state) {
      state.FilterItems = AllItems;
      state.selectedCategories = "All";
    },
    setfilterZtoA(state) {
      const selectedFilter = state.FilterItems.sort((a, b) =>
        b.title.localeCompare(a.title)
      );
      state.FilterItems = selectedFilter;
      state.sortedOrder = "ZtoA";
    },
    toggleCategory(state, action: actionType) {
      const category = action.payload.payload;
      const filteredItems = AllItems.filter((c) => c.category == category);

      state.FilterItems = filteredItems;
      //@ts-ignore
      state.selectedCategories = category;
      filterSlice.caseReducers.setfilterAtoZ(state);
      filterSlice.caseReducers.setStarFilter(state, {
        payload: { payload: "5" },
      });
      // filterSlice.caseReducers.setStarFilter(state, {
      //   payload: { payload: "5" },
      // });
    },
    clearFilter(state) {
      state.FilterItems = AllItems;
      state.sortedOrder = "AtoZ";
      state.selectedCategories = null;
      state.selectedStars = null;
    },
    setStarFilter(state, action: actionType) {
      const star = Number(action.payload.payload);
      if (isNaN(star)) {
        console.error("Invalid star rating");
        return;
      }
      const filteredItem = AllItems.filter(
        (item) => Math.floor(item.rating) === (star === 5 ? 4 : star)
      );
      const filterByCategory =
        state.selectedCategories === "All"
          ? filteredItem
          : filteredItem.filter(
              (item) => item.category === state.selectedCategories
            );

      filterSlice.caseReducers.setfilterAtoZ(state);
      state.FilterItems = filterByCategory;
      //@ts-ignore
      state.selectedStars = star;
    },
  },
});

export const {
  setfilterAtoZ,
  setfilterZtoA,
  toggleCategory,
  All,
  clearFilter,
  setStarFilter,
} = filterSlice.actions;

export default filterSlice.reducer;
