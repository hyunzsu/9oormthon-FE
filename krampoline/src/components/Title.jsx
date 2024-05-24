export default function Title({ mainText, subText }) {
  return (
    <div className="my-[30px]">
      {mainText.split('\n').map((text, index) => (
        <h2 key={index} className="text-[24px] leading-[30px] font-bold">
          {text}
        </h2>
      ))}
      {subText && (
        <h3 className="text-base font-light pt-[10px] text-[#4A4A4A]">
          {subText}
        </h3>
      )}
    </div>
  )
}
