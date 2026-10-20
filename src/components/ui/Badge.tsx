import React from "react";

type BadgeProps = {
  children: React.ReactNode;
  className?: string;
};

const Badge = ({ children, className = "" }: BadgeProps) => {
  return (
    <span
      className={`inline-block rounded-md border border-slate-200 bg-slate-50 px-2.5 py-0.5 text-xs font-medium text-slate-700 ${className}`}
    >
      {children}
    </span>
  );
};

export default Badge;