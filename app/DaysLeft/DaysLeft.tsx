'use client'

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
    <div>
      <p className="text-3xl">Dager igjen til 10Mila: {daysLeft}</p>
    </div>
  )
}

export default DaysLeft