"use client";
import React, { useState } from "react";
import { students } from "@/types/students/studentData";
import StudentCard from "./StudentCard";
import StudentFilter from "./StudentFilter";

const StudentGrid = () => {
  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("all");

  const filteredStudents = students.filter((student) => {
    const matchName = student.name.toLowerCase().includes(search.toLowerCase());
    const matchDepartment = department === "all" || student.department === department;

    return matchName && matchDepartment;
  });

  return (
    <div className="w-full flex flex-col">
      <StudentFilter onSearch={setSearch} searchDepartment={setDepartment} />

      {filteredStudents.length === 0 ? (
        <div className="rounded-xl border border-dashed border-slate-300 p-12 text-center text-sm text-slate-500 bg-slate-50/50">
          No students found matching your search criteria.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStudents.map((student) => (
            <StudentCard key={student.id} student={student} />
          ))}
        </div>
      )}
    </div>
  );
};

export default StudentGrid;
