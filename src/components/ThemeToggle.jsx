import React from 'react'
import { FaSun, FaMoon } from 'react-icons/fa'

export default function ThemeToggle({theme, setTheme}){
  const toggle = ()=> setTheme(theme==='dark'?'light':'dark')
  return (
    <button onClick={toggle} aria-label='Toggle theme' className='p-2 rounded-md bg-white/5 hover:bg-white/10'>
      {theme==='dark' ? <FaSun/> : <FaMoon/>}
    </button>
  )
}
