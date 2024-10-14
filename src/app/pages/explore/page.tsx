"use client";
import { PlantCard } from "@/components/custom/Explore-page-plant-card";
import Footer from "@/components/custom/Footer";
import Navbar from "@/components/custom/Navbar";
import { Sidebar } from "@/components/custom/Sidebar";
import { RootState } from "@/store";
import { ItemsType } from "@/types/itemsType";
import { useSelector } from "react-redux";

export default function Home() {
  const items = useSelector(
    (state: RootState) => state.filteredItem.FilterItems
  );

  return (
    <>
      <Navbar />

      <div className="flex flex-col min-h-screen ">
        <div className="flex flex-1">
          <Sidebar />
          <div className="w-4/5 flex flex-wrap gap-5 items-center justify-center pb-5 p-1">
            {items.length > 0 ? (
              items.map((I: ItemsType, index: number) => (
                <div key={index}>
                  <PlantCard plant={I} />
                </div>
              ))
            ) : (
              <p>Item not Found</p>
            )}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
