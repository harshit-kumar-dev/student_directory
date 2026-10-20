import React from 'react'

type BadgeProps = {
    children: React.ReactNode
}

const Badge = ({children}: BadgeProps) => {
  return (
    <span>{children}</span>
  )
}

export default Badge

// className="rounded-sm border border-slate-200 bg-slate-50 px-2 py-1 text-xs text-slate-600"