import JobListItem from "@/components/ui/JobListItem";
import H1 from "@/components/ui/h1";
import prisma from "@/lib/prisma";
import Link from "next/link";

export default async function AdminPage() {
  const unapprovedJobs = await prisma.job.findMany({
    where: { approved: false },
  });

  const approvedJobs = await prisma.job.findMany({
    where: { approved: true },
  });

  return (
    <main className="m-auto  my-10 max-w-5xl space-y-1 px-3">
      <H1 className="text-center">Admin Dashboard</H1>
      <p className="space-y-10 text-center text-sm">
        **Click each job to approve/delete**
      </p>
      <section className="mb-10 flex flex-col gap-3">
        <h2 className="text-lg font-bold">Unapproved Jobs:</h2>
        {unapprovedJobs.map((job) => (
          <Link key={job.id} href={`/admin/jobs/${job.slug}`} className="block">
            <JobListItem job={job} />
          </Link>
        ))}
        {unapprovedJobs.length === 0 && (
          <p className="text-muted-foreground">
            No jobs currently waiting approval
          </p>
        )}
      </section>

      <section className=" flex flex-col gap-3 ">
        <h2 className="mt-10 text-lg font-bold">Approved Jobs:</h2>
        {approvedJobs.map((job) => (
          <Link key={job.id} href={`/admin/jobs/${job.slug}`} className="block">
            <JobListItem job={job} />
          </Link>
        ))}
        {approvedJobs.length === 0 && (
          <p className="text-muted-foreground">No jobs currently approved</p>
        )}
      </section>
    </main>
  );
}
