import StudentGrid from "@/components/StudentGrid";

const StudentsPage = () => {
  return (
    <main className="mx-auto min-h-screen max-w-6xl px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-6 border-b border-slate-200 pb-5">
        <h1 className="text-3xl font-bold text-slate-900">Students</h1>
        <p className="mt-1 text-sm text-slate-500">
          Browse enrolled students, search by name, filter by department, and view profiles.
        </p>
      </div>
      <StudentGrid />
    </main>
  );
};

export default StudentsPage;
