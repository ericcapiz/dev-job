import { ClerkProvider } from "@clerk/nextjs";
import { Metadata } from "next";
import AdminNavbar from "./jobs/AdminNavbar";

export const metadata: Metadata = {
  title: "Admin",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <AdminNavbar />
      {children}
    </div>
  );
}
