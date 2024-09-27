import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { JSX, SVGProps } from "react";

export default function Component() {
  return (
    <footer className="bg-muted py-12 md:py-16 lg:py-20">
      <div className="container  lg:max-w-8xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div className="flex flex-col gap-4">
          <Link href="#" className="flex items-center gap-2" prefetch={false}>
            <LeafIcon className="w-8 h-8 text-primary" />
            <span className="text-lg font-bold">Plantify</span>
          </Link>
          <p className="text-muted-foreground">
            Discover the beauty of nature with our curated collection of plants.
          </p>
        </div>
        <div className="grid gap-2">
          <h4 className="text-lg font-semibold">Quick Links</h4>
          <Link href="#" className="hover:underline" prefetch={false}>
            Home
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Shop
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            About
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Contact
          </Link>
        </div>
        <div className="grid gap-2">
          <h4 className="text-lg font-semibold">Categories</h4>
          <Link href="#" className="hover:underline" prefetch={false}>
            Indoor Plants
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Outdoor Plants
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Succulents
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Herbs
          </Link>
        </div>
        <div className="grid gap-4">
          <h4 className="text-lg font-semibold">Newsletter</h4>
          <p className="text-muted-foreground">
            Subscribe to our newsletter for the latest updates and offers.
          </p>
          <form className="flex gap-2">
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-1"
            />
            <Button type="submit">Subscribe</Button>
          </form>
        </div>
      </div>
    </footer>
  );
}

function LeafIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
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
