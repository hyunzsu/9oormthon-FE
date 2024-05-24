import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <main
      className="min-h-screen bg-cover bg-top"
      style={{
        backgroundImage:
          "url('https://raw.githubusercontent.com/workmeong-shimmeong/olleh-client/8eb940957d422668df3b9fba223fe8cfba6fddae/src/assets/splash.svg')",
      }}
    >
      <Link
        to="/products"
        className="fixed bottom-[34px] font-semibold text-black text-[16px] rounded-[30px] w-[calc(100%-80px)] max-w-[350px] h-[50px] mx-[40px] bg-white leading-[50px] text-center"
      >
        친구 만나러가기
      </Link>
    </main>
  )
}
