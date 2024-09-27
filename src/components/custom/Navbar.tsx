import { FiLogIn } from "react-icons/fi";
import { FaLeaf } from "react-icons/fa";
import Link from "next/link";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { SVGProps } from "react";
import LoginButton from "./LoginButton";
import User from "./User";
import { useSession } from "next-auth/react";
import { ModeToggle } from "./ThemeSwitcher";
import CartButton from "./CartButton";

export default function Component() {
  return (
    <>
      <div className="bg-background sticky top-0 z-40 w-full border-b border-b-muted/20 px-4 py-3 md:px-6 md:py-4">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="font-bold flex gap-2 items-center p-4 ">
              <FaLeaf />
              Plantify
            </div>
          </Link>
          <nav className="hidden items-center gap-6 md:flex">
            <ModeToggle />
            <Link
              href="/"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground data-[active=true]:text-foreground data-[active=true]:font-semibold"
              // data-active={window.location.pathname === "/"}
            >
              Home
            </Link>
            <Link
              href="/pages/explore"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground data-[active=true]:text-foreground data-[active=true]:font-semibold"
              // data-active={window.location.pathname === "/about"}
            >
              Explore
            </Link>
            <Link
              href="#"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground data-[active=true]:text-foreground data-[active=true]:font-semibold"
              // data-active={window.location.pathname === "/services"}
            >
              Services
            </Link>
            <Link
              href="#"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground data-[active=true]:text-foreground data-[active=true]:font-semibold"
              // data-active={window.location.pathname === "/contact"}
            >
              Contact
            </Link>{" "}
            <CartButton />
            <LoginButton />
          </nav>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <MenuIcon className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs">
              <div className="grid gap-4 p-4">
                <Link
                  href="/"
                  className="flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground data-[active=true]:text-foreground data-[active=true]:font-semibold"
                  // data-active={window.location.pathname === "/"}
                >
                  <HomeIcon className="h-5 w-5" />
                  Home
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground data-[active=true]:text-foreground data-[active=true]:font-semibold"
                  // data-active={window.location.pathname === "/about"}
                >
                  <InfoIcon className="h-5 w-5" />
                  About
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground data-[active=true]:text-foreground data-[active=true]:font-semibold"
                  // data-active={window.location.pathname === "/services"}
                >
                  <ServerIcon className="h-5 w-5" />
                  Services
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground data-[active=true]:text-foreground data-[active=true]:font-semibold"
                  // data-active={window.location.pathname === "/contact"}
                >
                  <ContactIcon className="h-5 w-5" />
                  Contact
                </Link>{" "}
                <CartButton />
                <ModeToggle />
                <LoginButton />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </>
  );
}

function ContactIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <circle cx="12" cy="10" r="2" />
      <line x1="8" x2="8" y1="2" y2="4" />
      <line x1="16" x2="16" y1="2" y2="4" />
    </svg>
  );
}

function HomeIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function InfoIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </svg>
  );
}

function MenuIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function MountainIcon(
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
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}

function ServerIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
      <rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
      <line x1="6" x2="6.01" y1="6" y2="6" />
      <line x1="6" x2="6.01" y1="18" y2="18" />
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
