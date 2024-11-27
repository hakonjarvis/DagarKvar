'use client'

import Head from 'next/head'
import React, { useEffect, useState } from 'react'

const DaysLeft: React.FC = () => {
  const [daysLeft, setDaysLeft] = useState<number>(0)

  useEffect(() => {
    const calculateDaysLeft = () => {
      const today = new Date()
      const nextYear = today.getFullYear() + 1
      const targetDate = new Date(nextYear, 4, 3) // May is month 4 (0-indexed)
      const timeDiff = targetDate.getTime() - today.getTime()
      const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24))
      setDaysLeft(daysDiff)
    }

    calculateDaysLeft()
  }, [])

  return (
    <>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap" rel="stylesheet" />
      </Head>
      <div className="w-full text-center" style={{ position: 'absolute', top: '25%' }}>
        <p className={"text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl whitespace-nowrap overflow-hidden text-ellipsis font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500"}>
          Dager igjen til 10Mila: {daysLeft}
        </p>
      </div>
    </>
  )
}

export default DaysLeft