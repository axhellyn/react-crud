import React from 'react'
import DarkModeButton from './DarkModeButton'

export default function Header() {
  return (
    <nav className="py-3 px-7 w-full bg-purple-400 flex justify-between">
        <h1 className="text-lg text-white dark:text-purple-900 font-bold">Tasks</h1>
        < DarkModeButton />
    </nav>
  )
}
