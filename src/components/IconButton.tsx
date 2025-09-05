import React from "react"

type IconButtonProps = {
  children?: React.ReactNode
  bg?: string
  textColor?: string
  hover?: string
  className?: string
  onClick?: () => void
}

export default function IconButton({
  children,
  className = "",
  onClick,
}: IconButtonProps) {
  return (
    <div
      onClick={onClick}
      className={`rounded-full p-4 cursor-pointer flex items-center justify-center transition-colors ${className}`}
    >
      {children}
    </div>
  )
}
