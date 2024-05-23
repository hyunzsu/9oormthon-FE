export default function Title({ mainText, subText }) {
  return (
    <>
      <h2 className="text-2xl">{mainText}</h2>
      {subText && <h3 className="text-base pt-2">{subText}</h3>}
    </>
  )
}
