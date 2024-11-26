'use client'

import React, { useEffect, useRef, useState } from 'react'
import clsx from 'clsx'
import styles from './Spinner.module.css'

const sizes = {
  lg: 'h-16 w-16',
  md: 'h-8 w-8',
  sm: 'h-4 w-4',
  xl: 'h-24 w-24',
}

// const variants = {
//   light: 'text-white',
//   primary: 'text-blue-200',
// }

export type SpinnerProps = {
  className?: string
  size?: keyof typeof sizes
  // variant?: keyof typeof variants
}

const Spinner: React.FC<SpinnerProps> = ({
  className = '',
  size = 'md',
  // variant = 'primary',
}: SpinnerProps) => {
  const spinnerRef = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ top: '50%', left: '50%' })

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (spinnerRef.current) {
        const spinnerRect = spinnerRef.current.getBoundingClientRect()
        const distance = Math.hypot(
          event.clientX - (spinnerRect.left + spinnerRect.width / 2),
          event.clientY - (spinnerRect.top + spinnerRect.height / 2)
        )

        if (distance < 100) { // Adjust the distance threshold as needed
          const randomX = Math.random() * (window.innerWidth - spinnerRect.width)
          const randomY = Math.random() * (window.innerHeight - spinnerRect.height)
          setPosition({ top: `${randomY}px`, left: `${randomX}px` })
        }
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div
      ref={spinnerRef}
      style={{ position: 'absolute', top: position.top, left: position.left }}
      className={clsx(
        styles['vibrate'],
        sizes[size],
        className,
      )}
    >
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="100" height="100" fill="white"/>
        <path d="M0 0L100 100H0V0Z" fill="orange"/>
      </svg>
    </div>
  )
}

Spinner.displayName = 'Spinner'

export default Spinner