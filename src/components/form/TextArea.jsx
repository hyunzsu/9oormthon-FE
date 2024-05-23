export default function TextArea({ title, placeholder, value, onChange }) {
  return (
    <label>
      <p>{title}</p>
      <textarea
        placeholder={placeholder}
        className="resize-none"
        value={value}
        onChange={onChange}
      />
    </label>
  )
}
