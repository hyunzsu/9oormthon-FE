import { useNavigate } from 'react-router-dom'

export default function Button({ text, type, status, onClick }) {
  const baseStyles =
    'fixed px-4 py-2 font-semibold text-white rounded bottom-[45px] w-[267px] h-[41px] rounded-3xl text-14 drop-shadow-md'
  const activeStyles = 'bg-black hover:bg-primary hover:text-white'
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
      프로그램 등록하기
    </button>
  )
}
