export default function Button({
  children,
  className = '',
}: {
  children: JSX.Element | JSX.Element[] | string
  className?: string
}) {
  return (
    <button
      className={`h-10 flex items-center gap-2 text-primary px-2.5 transition-all hover:bg-hover rounded-lg ${className}`}
    >
      {children}
    </button>
  )
}
