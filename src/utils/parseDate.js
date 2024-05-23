export default function parseDate(date) {
  const year = date.getFullYear().toString()
  const month = (date.getMonth() + 1).toString().padStart(2, '0') // getMonth는 0부터 시작하므로 1을 더해줍니다.
  const day = date.getDate().toString().padStart(2, '0')
  return [year, month, day].join('-')
}
