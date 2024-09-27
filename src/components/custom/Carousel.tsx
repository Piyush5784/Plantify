//old one

// "use client";
// import {
//   Carousel as Carousell,
//   CarouselContent,
//   CarouselItem,
//   type CarouselApi,
//   CarouselPrevious,
//   CarouselNext,
// } from "@/components/ui/carousel";
// import React from "react";
// import { Button } from "../ui/button";
// import {
//   img1,
//   img2,
//   img3,
//   phoneImg1,
//   phoneImg2,
//   phoneImg3,
// } from "@/Images/ExportImages";
// import Image, { StaticImageData } from "next/image";

// export function Carousel() {
//   const [api, setApi] = React.useState<CarouselApi>();
//   const [current, setCurrent] = React.useState(0);

//   const imageArray = [img1, img2, img3];
//   const phoneImageArray = [phoneImg1, phoneImg2, phoneImg3];

//   React.useEffect(() => {
//     if (!api) {
//       return;
//     }

//     setCurrent(api.selectedScrollSnap());

//     api.on("select", () => {
//       setCurrent(api.selectedScrollSnap());
//     });
//   }, [api]);

//   return (
//     <>
//       <div className="flex items-center justify-center  md:mt-10">
//         <Carousell opts={{ loop: true }} setApi={setApi} className=" w-[90%]">
//           {" "}
//           <CarouselContent>
//             {imageArray.map((href: StaticImageData, index: number) => (
//               <CarouselItem className="flex items-center justify-center top-0">
//                 {" "}
//                 <Button
//                   className="relative left-24"
//                   onClick={() => api?.scrollTo(current - 1)}
//                 >
//                   Left
//                 </Button>
//                 <Image
//                   src={href}
//                   alt="reload"
//                   className="rounded-lg  md:basis-1/2 lg:basis-1/3"
//                 />{" "}
//                 <Button
//                   className="relative right-24"
//                   onClick={() => api?.scrollTo(current + 1)}
//                 >
//                   Right
//                 </Button>
//               </CarouselItem>
//             ))}

//             {phoneImageArray.map((href: StaticImageData, index: number) => (
//               <CarouselItem className="flex items-center justify-center">
//                 {" "}
//                 <Button
//                   className="relative left-24"
//                   onClick={() => api?.scrollTo(current - 1)}
//                 >
//                   Left
//                 </Button>
//                 <Image
//                   src={href}
//                   alt="reload"
//                   className="rounded-lg md:basis-1/2 lg:basis-1/3"
//                 />{" "}
//                 <Button
//                   className="relative right-24"
//                   onClick={() => api?.scrollTo(current + 1)}
//                 >
//                   Right
//                 </Button>
//               </CarouselItem>
//             ))}
//           </CarouselContent>
//         </Carousell>
//       </div>
//       <div className="flex gap-3"></div>
//     </>
//   );
// }

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { img1, img2, img3 } from "@/Images/ExportImages";
import Image from "next/image";
import { JSX, SVGProps } from "react";
import { Button } from "../ui/button";

import { imageArrayType } from "./ComponentPropTypes";

export default function Component() {
  const imageArray = [
    {
      image: img1,
      heading: "Explore the Outdoors",
      content: "Discover breathtaking landscapes and reconnect with nature.",
    },
    {
      image: img2,
      heading: "Cozy Cabin Getaway",
      content: "Escape the city and unwind in a charming mountain cabin.",
    },
    {
      image: img3,
      heading: "Beachside Bliss",
      content: "Soak up the sun and enjoy the sound of the waves.",
    },
  ];
  return (
    <Carousel
      className="w-full lg:max-w-7xl md:max-w-4xl md:ml-20  m-5"
      opts={{ loop: true }}
    >
      <CarouselContent>
        {imageArray.map((item: imageArrayType, index) => (
          <>
            {" "}
            <CarouselItem key={index}>
              <div className="grid gap-4 md:grid-cols-2 items-center">
                <Image
                  src={item.image}
                  alt="slide 1 image"
                  height={300}
                  width={1100}
                  className="rounded-lg object-cover aspect-video"
                />

                <div className="space-y-2 text-center">
                  <h3 className="text-2xl font-semibold">{item.heading}</h3>
                  <p className="text-muted-foreground">{item.content}</p>
                  <div className="flex gap-4 items-center justify-center">
                    <Button size="lg">Explore Collection</Button>
                    <Button size="lg" variant="outline">
                      Learn More
                    </Button>
                  </div>
                </div>
              </div>
            </CarouselItem>
          </>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-background/50 p-2 hover:bg-background/75 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
        <ChevronLeftIcon className="w-5 h-5 text-foreground" />
      </CarouselPrevious>
      <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-background/50 p-2 hover:bg-background/75 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
        <ChevronRightIcon className="w-5 h-5 text-foreground" />
      </CarouselNext>
    </Carousel>
  );
}

function ChevronLeftIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}

function ChevronRightIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

function XIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
