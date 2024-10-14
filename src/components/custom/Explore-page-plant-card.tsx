"use client";
import { ItemsType } from "@/types/itemsType";
import Image from "next/image";
import { useRouter } from "next/navigation";
export const PlantCard = ({ plant }: { plant: ItemsType }) => {
  const router = useRouter();
  return (
    <>
      <div
        onClick={() => router.push(`/pages/explore/new/${plant.id}`)}
        className="cursor-pointer max-w-sm rounded-lg shadow-lg overflow-hidden bg-white text-black hover:scale-[102%] duration-300 dark:bg-black dark:text-white border border-blue-950"
      >
        <div className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40 ">
          <Image
            src={String(plant.image)}
            alt="card-image"
            width={500}
            height={500}
            priority
          />
        </div>
        <div className="p-4">
          <h2 className="text-2xl font-semibold">{plant.title}</h2>
          <p className="text-sm mt-1">{plant.category}</p>
          <p className=" mt-2">{plant.description}</p>
          <div className="flex items-center justify-between mt-4">
            <span className="text-xl font-bold ">${plant.price}</span>
            <div className="flex items-center">
              <span className="text-yellow-500">★</span>
              <span className="ml-1 ">{plant.rating.toFixed(1)}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
