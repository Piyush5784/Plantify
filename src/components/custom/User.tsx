"use client";
import { Link } from "lucide-react";
import { getServerSession } from "next-auth";
import { getSession, useSession } from "next-auth/react";
import { FiLogIn } from "react-icons/fi";

export default function User() {
  const user = useSession();
  if (user.status === "authenticated") {
    return <div>111</div>;
  } else {
    return (
      <Link
        href="/pages/signin"
        className="text-sm flex gap-2 font-medium text-muted-foreground transition-colors hover:text-foreground data-[active=true]:text-foreground data-[active=true]:font-semibold"
        // data-active={window.location.pathname === "/pages/signin"}
      >
        <FiLogIn size={20} />
        Login{" "}
      </Link>
    );
  }
}
