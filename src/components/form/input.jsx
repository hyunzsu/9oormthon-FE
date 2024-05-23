function Input({ id, name, type, title, placeholder }) {
  return (
    <label htmlFor={id}>
      <p>{title}</p>
      <input id={id} name={name} type={type} placeholder={placeholder} />
    </label>
  )
}

export function InputText({ title }) {
  return (
    <Input
      id="text"
      name="text"
      type="text"
      title={title}
      placeholder="010-0000-0000"
    />
  )
}

export function InputEmail() {
  return (
    <Input
      id="email"
      name="email"
      type="email"
      title="이메일"
      placeholder="abc@def.com"
    />
  )
}
