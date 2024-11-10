export default function Input({
  value,
  setValue,
}: {
  value: string
  setValue: (newValue: string) => void
}) {
  function handleSetValue(newValue: string) {
    setValue(newValue)
  }

  return (
    <div>
      <input
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          handleSetValue(e.target.value)
        }
      />
    </div>
  )
}
