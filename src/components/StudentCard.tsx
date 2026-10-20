import React from "react";
import { Student } from "@/types/students/studentType";
import Link from "next/link";

type StudentCardProps = {
  student: Student;
};

const StudentCard = ({ student }: StudentCardProps) => {
  const nameParts = student.name.trim().split(/\s+/);
  const initials =
    nameParts.length > 1
      ? (nameParts[0][0] + nameParts[nameParts.length - 1][0]).toUpperCase()
      : nameParts[0].slice(0, 2).toUpperCase();

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-xs hover:border-slate-300 hover:shadow-md transition-all flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 font-bold text-sm text-blue-700">
            {initials}
          </div>

          <span className="rounded-md bg-slate-100 px-2 py-0.5 text-xs font-mono font-medium text-slate-600">
            {student.id}
          </span>
        </div>

        <h2 className="text-base font-bold text-slate-900 leading-snug">
          {student.name}
        </h2>

        <div className="mt-3 flex flex-wrap items-center gap-2">
          <span className="rounded-md bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-700">
            {student.department}
          </span>
          <span className="rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs text-slate-600">
            Year {student.year}
          </span>
        </div>

        <p className="mt-3 text-xs leading-relaxed text-slate-500 line-clamp-2">
          {student.about}
        </p>
      </div>

      <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
        <span className="text-[11px] text-slate-400 font-medium truncate max-w-[140px]">
          {student.specialization}
        </span>
        <Link
          href={`/students/${student.id}`}
          className="inline-flex items-center gap-1 rounded-md bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-700 hover:bg-blue-600 hover:text-white transition-colors"
        >
          View Profile <span>-&gt;</span>
        </Link>
      </div>
    </div>
  );
};

export default StudentCard;
