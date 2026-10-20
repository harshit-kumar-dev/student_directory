"use client";
import React, { useState } from "react";

type StudentFilterProps = {
  onSearch: (search: string) => void;
  searchDepartment: (value: string) => void;
};

const StudentFilter = ({ onSearch, searchDepartment }: StudentFilterProps) => {
  const [search, setSearch] = useState("");

  return (
    <div className="w-full flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 mb-6">
      <div className="relative flex-1 max-w-md">
        <input
          placeholder="Search student by name..."
          type="text"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            onSearch(e.target.value);
          }}
          className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2 text-sm text-slate-800 placeholder-slate-400 shadow-xs focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all"
        />
      </div>

      <div className="shrink-0">
        <select
          defaultValue="all"
          onChange={(e) => searchDepartment(e.target.value)}
          className="w-full sm:w-auto rounded-lg border border-slate-300 bg-white px-3.5 py-2 text-sm text-slate-700 shadow-xs focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all cursor-pointer"
        >
          <option value="all">All Departments</option>
          <option value="Computer Science">Computer Science</option>
          <option value="Information Technology">Information Technology</option>
          <option value="Electronics Engineering">Electronics Engineering</option>
        </select>
      </div>
    </div>
  );
};

export default StudentFilter;
