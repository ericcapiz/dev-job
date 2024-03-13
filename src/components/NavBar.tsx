"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png";
import { Button } from "./ui/button";
import { useClerk } from "@clerk/nextjs";

export default function Navbar() {
  const { user, signOut } = useClerk();

  return (
    <header className="shadow-sm ">
      <nav className="m-auto flex max-w-5xl items-center justify-between px-3 py-5">
        <Link href="/" className="flex items-center gap-3">
          <Image src={logo} width={40} height={40} alt="dev jobs logo" />
          <span className="text-xl font-bold tracking-tight">Dev Jobs</span>
        </Link>
        <div>
          <Button asChild>
            <Link href="/jobs/new">Post a job</Link>
          </Button>
          <Link href="/admin" className="ml-3 font-semibold underline">
            {user ? "Admin Dashboard" : "Admin Login"}
          </Link>
        </div>
      </nav>
    </header>
  );
}
