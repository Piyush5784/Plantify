import { cn } from "@/lib/utils";
import { RootState } from "@/store";
import {
  setfilterAtoZ,
  setfilterZtoA,
  toggleCategory,
  All,
  setStarFilter,
  clearFilter,
} from "@/store/Slices/FilterItemSlice";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "../ui/button";

export function Sidebar() {
  const stars = ["4", "3", "2", "1"];
  const selectedStar = useSelector(
    (state: RootState) => state.filteredItem.selectedStars
  );

  const selectedCategory = useSelector(
    (state: RootState) => state.filteredItem.selectedCategories
  );
  const sortedOrder = useSelector(
    (state: RootState) => state.filteredItem.sortedOrder
  );
  const dispatch = useDispatch();

  function handleSortAtoZ() {
    return dispatch(setfilterAtoZ());
  }
  function handleSortZtoA() {
    return dispatch(setfilterZtoA());
  }
  function handleFilterCategoryIndoorPlants() {
    return dispatch(toggleCategory({ payload: "Indoor Plants" }));
  }
  function handleFilterCategoryClimbers() {
    return dispatch(toggleCategory({ payload: "Climbers" }));
  }
  function handleFilterCategoryFerns() {
    return dispatch(toggleCategory({ payload: "Ferns" }));
  }

  function handleFilterCategoryHerbs() {
    return dispatch(toggleCategory({ payload: "Herbs" }));
  }
  function handleFilterNone() {
    return dispatch(All());
  }
  function handleStarFilter(star: string) {
    return dispatch(setStarFilter({ payload: star }));
  }

  return (
    <>
      {" "}
      <div className="sticky ml-1 rounded-lg p-4  dark:border top-0 invisible w-1/5 md:block md:w-1/5 md:visible border border-blue-950">
        <div onClick={handleFilterNone} className="cursor-pointer">
          <span
            className={cn(
              selectedCategory === "All" && "underline",
              "flex justify-between items-center"
            )}
          >
            All{" "}
            <Button
              variant={"outline"}
              onClick={() => dispatch(clearFilter())}
              className="rounded-xl bg-black text-white hover:bg-[#323232] dark:bg-white dark:text-black hover:text-white"
            >
              Clear
            </Button>
          </span>
        </div>
        <div
          onClick={handleFilterCategoryIndoorPlants}
          className="cursor-pointer"
        >
          <span
            className={cn(selectedCategory === "Indoor Plants" && "underline")}
          >
            Indoor plants
          </span>
        </div>
        <div onClick={handleFilterCategoryClimbers} className="cursor-pointer">
          <span className={cn(selectedCategory === "Climbers" && "underline")}>
            Climbers
          </span>
        </div>
        <div onClick={handleFilterCategoryFerns} className="cursor-pointer">
          <span className={cn(selectedCategory === "Ferns" && "underline")}>
            Ferns
          </span>
        </div>{" "}
        <div onClick={handleFilterCategoryHerbs} className="cursor-pointer">
          <span className={cn(selectedCategory === "Herbs" && "underline")}>
            Herbs
          </span>
        </div>{" "}
        <p className="font-bold text-xl mt-10">Sort Items</p>
        <div className="cursor-pointer">
          <input
            type="radio"
            checked={sortedOrder === "AtoZ"}
            onChange={handleSortAtoZ}
            name="sort"
          />
          <span> Sort Item a to z</span>
        </div>
        <div className="cursor-pointer">
          <input
            type="radio"
            checked={sortedOrder === "ZtoA"}
            onChange={handleSortZtoA}
            name="sort"
          />
          <span> Sort Item z to a</span>
        </div>
        <p className="font-bold text-xl mt-10">Filter items by ratings</p>
        {stars.map((star) => (
          <div key={star} className="cursor-pointer">
            <input
              type="radio"
              checked={String(selectedStar) === star}
              onChange={() => handleStarFilter(star)}
              name={star}
            />
            <span> {star === "4" ? "4 & 4.5 above ⭐" : star + "⭐"}</span>
          </div>
        ))}
      </div>
    </>
  );
}
