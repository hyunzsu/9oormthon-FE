export default function Button({ text, type, status, onClick }) {
  const baseStyles =
    'fixed px-4 py-2 font-semibold text-white rounded fixed bottom-2 w-[calc(100%-40px)] max-w-[390px] m-[20px]'
  const activeStyles = 'bg-blue-500 hover:bg-blue-700'
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
