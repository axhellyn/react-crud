import React from 'react'
import DarkModeButton from './DarkModeButton'

export default function Header() {
  return (
    <nav className="py-3 px-7 w-full bg-purple-900 flex justify-between">
        <h1 className="text-lg text-white  font-bold">Tasks</h1>
        < DarkModeButton />
    </nav>
  )
}
