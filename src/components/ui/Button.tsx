import React from 'react'

type ButtonProps = {
    children: React.ReactNode;
    onClick?: () => void;
}

const Button = ({children, onClick}: ButtonProps) => {
  return (
    <div>
      <button onClick={onClick}>{children}</button>
    </div>
  )
}

export default Button


// className="rounded-md bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700"
