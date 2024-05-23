function Input({ id, name, type, title, placeholder, value, onChange }) {
  return (
    <label htmlFor={id} className="mb-[12px]">
      <p>{title}</p>
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="border border-gray-300 rounded p-2 w-full mt-[6px]"
      />
    </label>
  )
}

export function InputText({ title, placeholder, value, onChange }) {
  return (
    <Input
      id="text"
      name="text"
      type="text"
      title={title}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  )
}

export function InputNumber({ title, placeholder, value, onChange }) {
  return (
    <Input
      id="number"
      name="number"
      type="number"
      title={title}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  )
}

export function InputPhoneNumber({ value, onChange }) {
  return (
    <Input
      id="phoneNumber"
      name="phoneNumber"
      type="tel"
      title="연락처"
      placeholder="010-0000-0000"
      value={value}
      onChange={onChange}
    />
  )
}

export function InputEmail({ value, onChange }) {
  return (
    <Input
      id="email"
      name="email"
      type="email"
      title="이메일"
      placeholder="abc@def.com"
      value={value}
      onChange={onChange}
    />
  )
}
