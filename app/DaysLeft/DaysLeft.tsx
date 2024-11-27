'use client'

import React, { useEffect, useState } from 'react'
import Head from 'next/head'

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
      <div className="w-full flex justify-center items-start" style={{ height: '75vh' }}>
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl whitespace-nowrap overflow-hidden text-ellipsis font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 mt-16">
          Dager igjen til 10Mila: {daysLeft}
        </p>
      </div>
    </>
  )
}

export default DaysLeft