export default function Input({
  value,
  setValue,
  label,
  placeholder = '',
  multiline = false,
  maxLength = 128,
  type = 'text',
}: {
  value: string
  setValue: (newValue: string) => void
  label: string
  placeholder?: string
  multiline?: boolean
  maxLength?: number
  type?: 'text' | 'email'
}) {
  function handleSetValue(newValue: string) {
    setValue(newValue)
  }

  return (
    <div className="flex flex-col">
      <label
        htmlFor={label}
        className="font-body font-medium text-secondary uppercase text-sm mb-1"
      >
        {label}
      </label>

      {multiline ? (
        <textarea
          cols={40}
          rows={7}
          className="
            w-full max-w-80 text-primary p-3 outline-none rounded-xl placeholder-secondary
            bg-[linear-gradient(#08070b,_#08070b),_radial-gradient(circle_at_top_left,_#f2f2f2,_#f2f2f2)]
            focus:bg-[linear-gradient(#08070b,_#08070b),_radial-gradient(circle_at_top_left,_#80ffea,_#8aff80)]
          "
          style={{
            border: 'double 2px transparent',
            backgroundOrigin: 'border-box',
            backgroundClip: 'padding-box, border-box',
          }}
          maxLength={maxLength}
          name={label}
          id={label}
          placeholder={placeholder}
          value={value}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            handleSetValue(e.target.value)
          }
        />
      ) : (
        <input
          className="
            w-full max-w-80 text-primary p-3 outline-none rounded-xl placeholder-secondary
            bg-[linear-gradient(#08070b,_#08070b),_radial-gradient(circle_at_top_left,_#f2f2f2,_#f2f2f2)]
            focus:bg-[linear-gradient(#08070b,_#08070b),_radial-gradient(circle_at_top_left,_#80ffea,_#8aff80)]
          "
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
          value={value}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleSetValue(e.target.value)
          }
        />
      )}
    </div>
  )
}
