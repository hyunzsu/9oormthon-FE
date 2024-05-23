import { useNavigate } from 'react-router-dom'

export default function Button({ text, type, status, onClick }) {
  const baseStyles =
    'fixed px-4 py-2 font-semibold text-black rounded fixed bottom-2 w-[calc(100%-40px)] max-w-[390px] m-[20px] rounded-3xl'
  const activeStyles =
    'bg-white hover:bg-black hover:text-white border-2 border-black'
  const disabledStyles = 'bg-gray-400 cursor-not-allowed'
  const computedStyles = status === 'disabled' ? disabledStyles : activeStyles

  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/register')
  }

  return (
    <button
      type={type}
      className={`${baseStyles} ${computedStyles}`}
      disabled={status === 'disabled'}
      onClick={handleClick}
    >
      내 공간 등록하기
    </button>
  )
}
