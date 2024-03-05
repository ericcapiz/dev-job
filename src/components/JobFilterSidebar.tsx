import { Input } from "./ui/input";
import { Label } from "./ui/label";
import Select from "./ui/select";

async function filterJobs(formData: FormData) {
  "use server";
}

export default function JobFilterSidebar() {
  return (
    <aside className="sticky top-0 h-fit rounded-lg border bg-background p-4 md:w-[260px]">
      <form action={filterJobs}>
        <div className="space-y-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="q">Search</Label>
            <Input id="q" name="q" placeholder="Title, company, etc" />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="location">Location</Label>
            <Select id="location" name="location"></Select>
          </div>
        </div>
      </form>
    </aside>
  );
}
