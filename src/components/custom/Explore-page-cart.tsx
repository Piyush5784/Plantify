import { ItemsType } from "@/types/itemsType";
import Image from "next/image";
import Link from "next/link";

export default function Explore({ data }: { data: ItemsType }) {
  return (
    <>
      <div className="relative dark:text-white dark:bg-[#0f172a] flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
        <div className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
          <Image
            src={String(data.image)}
            alt="card-image"
            width={500}
            height={500}
            priority
          />
        </div>
        <div className="p-6">
          <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
            {data.title}
          </h5>
          <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
            {data.description}
          </p>
        </div>
        <div className="p-6 pt-0">
          <button
            className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg dark:hover:shadow-lg dark:hover:shadow-[#020617] dark:bg-[#334155] hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
            type="button"
          >
            <Link href={""} prefetch={true}>
              Read More
            </Link>
          </button>
        </div>
      </div>{" "}
    </>
  );
}

export const PlantCard = ({ plant }: { plant: ItemsType }) => {
  return (
    <Link href={`/pages/explore/${plant.id}`}>
      <div className="max-w-sm rounded-lg shadow-lg overflow-hidden bg-white text-black hover:scale-[102%] duration-300 dark:bg-black dark:text-white border border-blue-950">
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
    </Link>
  );
};
