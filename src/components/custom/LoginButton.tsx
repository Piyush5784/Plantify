"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@radix-ui/react-dropdown-menu";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { DropdownMenuTrigger } from "../ui/dropdown-menu";
import { DropdownMenuProfile } from "./DropDown";

export default function LoginButton() {
  const user = useSession();

  if (user.status == "authenticated") {
    return (
      <>
        <DropdownMenuProfile email={user.data.user?.email || ""} />
      </>
    );
  }
  return (
    <>
      <Link
        href="/pages/signin"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground data-[active=true]:text-foreground data-[active=true]:font-semibold"
        // data-active={window.location.pathname === "/contact"}
      >
        Login{" "}
      </Link>
    </>
  );
}
