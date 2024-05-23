export default function TextArea({ title, placeholder, value, onChange }) {
  return (
    <label>
      <p>{title}</p>
      <textarea
        placeholder={placeholder}
        className="resize-none border border-gray-300 rounded p-2 w-full mt-[14px]"
        maxLength={300}
        value={value}
        onChange={onChange}
      />
    </label>
  )
}
