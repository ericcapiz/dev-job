import { Metadata } from "next";
import NewJobForm from "./NewJobForm";

export const metadata: Metadata = {
  title: "Create new job",
};

export default function Page() {
  return <NewJobForm />;
}
