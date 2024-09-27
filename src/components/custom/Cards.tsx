import {
  img1,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
} from "@/Images/ExportImages";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { imageArrayType } from "./ComponentPropTypes";

export default function Component() {
  const imageArray = [
    {
      image: img9,
      heading: "Explore the Outdoors",
      content: "Discover breathtaking landscapes and reconnect with nature.",
    },
    {
      image: img4,
      heading: "Cozy Cabin Getaway",
      content: "Escape the city and unwind in a charming mountain cabin.",
    },
    {
      image: img5,
      heading: "Beachside Bliss",
      content: "Soak up the sun and enjoy the sound of the waves.",
    },

    {
      image: img6,
      heading: "Cozy Cabin Getaway",
      content: "Escape the city and unwind in a charming mountain cabin .",
    },
    {
      image: img7,
      heading: "Beachside Bliss",
      content: "Soak up the sun and enjoy the sound of the waves.",
    },
    {
      image: img8,
      heading: "Cozy Cabin Getaway",
      content: "Escape the city and unwind in a charming mountain  cabin.",
    },
  ];
  return (
    <section className="grid grid-cols-1 gap-6 p-4 md:grid-cols-2 lg:grid-cols-3 md:p-6 md:mx-12">
      {imageArray.map((item: imageArrayType, index: number) => (
        <>
          <div
            key={`${item.image}+${Math.random() * 1000}`}
            className="relative overflow-hidden rounded-lg group"
          >
            <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
              <span className="sr-only">View</span>
            </Link>
            <Image
              src={item.image}
              alt="Product 2"
              width={400}
              height={300}
              className="object-cover w-full h-60"
              aria-describedby={String(item.image)}
            />
            <div className="p-4 bg-background">
              <h3 className="text-lg font-semibold md:text-xl">
                {item.heading}
              </h3>
              <p className="text-sm text-muted-foreground">{item.content}</p>
            </div>
          </div>
        </>
      ))}
    </section>
  );
}
