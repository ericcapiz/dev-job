"use client";

import { useClerk } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

export default function AdminNavbar() {
  const { user, signOut } = useClerk();
  const router = useRouter();

  return (
    <div className="px-3">
      <div className="m-auto flex h-10 max-w-5xl items-center gap-2">
        <div className="space-x-2">
          <span className="font-semibold">
            {user && `Admin: ${user?.primaryEmailAddress?.emailAddress}`}
          </span>
          <button
            className="underline"
            onClick={async () => {
              await signOut();
              router.push("/");
              router.refresh();
            }}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
