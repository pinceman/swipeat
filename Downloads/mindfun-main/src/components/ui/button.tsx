import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline'
  children: React.ReactNode
}

export function Button({ variant = 'default', children, className = '', ...props }: ButtonProps) {
  return (
    <button
      className={`px-4 py-2 rounded-md transition-colors ${
        variant === 'outline' 
          ? 'border border-zinc-700 hover:bg-zinc-800' 
          : 'bg-emerald-500 hover:bg-emerald-600 text-white'
      } ${className}`}
      {...props}
    >
      {children}
    </button>
  )
} 