export default function Button({ text, type, status, onClick }) {
  const baseStyles =
    'fixed bottom-[34px] font-semibold text-white text-[16px] rounded-[30px] w-[calc(100%-80px)] max-w-[350px] h-[50px] mx-[20px]'
  const activeStyles = 'bg-black hover:bg-black'
  const disabledStyles = 'bg-gray-400 cursor-not-allowed'
  const computedStyles = status === 'disabled' ? disabledStyles : activeStyles
  return (
    <button
      type={type}
      className={`${baseStyles} ${computedStyles}`}
      disabled={status === 'disabled'}
      onClick={onClick}
    >
      {text}
    </button>
  )
}
