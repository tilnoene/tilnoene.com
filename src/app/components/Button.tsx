export default function Button({
  children,
  className = '',
  onClick = undefined,
  type = 'button',
}: {
  children: JSX.Element | JSX.Element[] | string
  className?: string
  onClick?: any // TODO: tipar
  type?: 'button' | 'submit' | 'reset'
}) {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`h-10 flex items-center gap-2 text-primary px-2.5 transition-all hover:bg-hover rounded-lg ${className}`}
    >
      {children}
    </button>
  )
}
