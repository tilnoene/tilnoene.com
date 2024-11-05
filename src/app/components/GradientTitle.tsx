import { ReactNode } from 'react'

export default function GradientTitle({
  children = undefined,
  className = '',
}: {
  children?: ReactNode | ReactNode[] | string | undefined
  className?: string // from-color1 to-color2
}) {
  return (
    <h1
      className={`bg-gradient-to-r ${className}`}
      style={{
        backgroundSize: '100%',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        MozBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        WebkitBoxDecorationBreak: 'clone',
      }}
    >
      {children}
    </h1>
  )
}
