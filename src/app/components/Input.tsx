export default function Input({
  label,
  placeholder = '',
  multiline = false,
  maxLength = 128,
  type = 'text',
  error = false,
  errorMessage = '',
  disabled = false,
  ...props
}: {
  label: string
  placeholder?: string
  multiline?: boolean
  maxLength?: number
  type?: 'text' | 'email'
  error?: boolean
  errorMessage?: string
  disabled?: boolean
}) {
  return (
    <div className="flex flex-col">
      <label
        htmlFor={label}
        className={`font-body font-medium text-secondary uppercase text-sm mb-1 ${
          error ? 'text-red-600' : ''
        }`}
      >
        {label}
      </label>

      {multiline ? (
        <textarea
          cols={40}
          rows={7}
          className={`
            w-full max-w-80 text-primary p-3 outline-none rounded-xl placeholder-secondary
            bg-[linear-gradient(#08070b,_#08070b),_radial-gradient(circle_at_top_left,_#f2f2f2,_#f2f2f2)]
            focus:bg-[linear-gradient(#08070b,_#08070b),_radial-gradient(circle_at_top_left,_#80ffea,_#8aff80)]
            disabled:cursor-not-allowed disabled:text-secondary disabled:bg-[linear-gradient(#08070b,_#08070b),_radial-gradient(circle_at_top_left,_#8f9ba8,_#8f9ba8)]
            ${
              error
                ? 'bg-[linear-gradient(#08070b,_#08070b),_radial-gradient(circle_at_top_left,_#dc2626,_#ef4444)]'
                : ''
            }
          `}
          style={{
            border: 'double 2px transparent',
            backgroundOrigin: 'border-box',
            backgroundClip: 'padding-box, border-box',
          }}
          maxLength={maxLength}
          name={label}
          id={label}
          placeholder={placeholder}
          disabled={disabled}
          // value={value}
          // onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
          //   handleSetValue(e.target.value)
          // }
          {...props}
        />
      ) : (
        <input
          className={`
            w-full max-w-80 text-primary p-3 outline-none rounded-xl placeholder-secondary
            bg-[linear-gradient(#08070b,_#08070b),_radial-gradient(circle_at_top_left,_#f2f2f2,_#f2f2f2)]
            focus:bg-[linear-gradient(#08070b,_#08070b),_radial-gradient(circle_at_top_left,_#80ffea,_#8aff80)]
            disabled:cursor-not-allowed disabled:text-secondary disabled:bg-[linear-gradient(#08070b,_#08070b),_radial-gradient(circle_at_top_left,_#8f9ba8,_#8f9ba8)]
            ${
              error
                ? 'bg-[linear-gradient(#08070b,_#08070b),_radial-gradient(circle_at_top_left,_#dc2626,_#ef4444)]'
                : ''
            }
          `}
          style={{
            border: 'double 2px transparent',
            backgroundOrigin: 'border-box',
            backgroundClip: 'padding-box, border-box',
          }}
          type={type}
          maxLength={maxLength}
          name={label}
          id={label}
          placeholder={placeholder}
          disabled={disabled}
          // value={value}
          // onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          //   handleSetValue(e.target.value)
          // }
          {...props}
        />
      )}

      {error && (
        <span className="text-red-500 text-sm mt-1">{errorMessage}</span>
      )}
    </div>
  )
}
