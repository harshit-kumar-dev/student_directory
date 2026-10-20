"use client";
import React from "react";
import { NavList } from "@/constants/navigation";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBarPage = () => {
  const pathName = usePathname();

  return (
    <header className="sticky top-0 z-30 w-full border-b border-slate-200 bg-white shadow-2xs">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div>
          <Link href="/students" className="text-lg font-bold tracking-tight text-blue-600">
            Campus Directory
          </Link>
        </div>

        <nav className="flex items-center gap-6 text-sm font-medium">
          {NavList.map((item) => {
            const isActive =
              pathName === item.href ||
              (item.href !== "/students" && pathName.startsWith(item.href));

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-colors ${
                  isActive
                    ? "font-semibold text-blue-600"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div>
          <Link
            href="/about"
            className="rounded-lg bg-blue-50 px-3.5 py-1.5 text-xs font-semibold text-blue-700 hover:bg-blue-100 transition-colors"
          >
            Directory Info
          </Link>
        </div>
      </div>
    </header>
  );
};

export default NavBarPage;
