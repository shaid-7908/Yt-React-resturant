import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    
<nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <a href="/" className="flex items-center">
      <h1 className='text-2xl font-bold'>East & <span className='text-yellow-500'>Treat</span></h1>
  </a>
  <div className="flex md:order-2">
      
      <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
  </div>
  <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      <li>
        <NavLink to='/' className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-yellow-500" : " text-black hover:text-yellow-500"
          } aria-current="page">Home</NavLink>
      </li>
      <li>
        <NavLink to='/about' className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-yellow-500" : " text-black hover:text-yellow-500"
          }>About</NavLink>
      </li>
      <li>
        <NavLink to='/menu' className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-yellow-500" : " text-black hover:text-yellow-500"
          }>Menu</NavLink>
      </li>
      <li>
        <NavLink to='/contact' className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-yellow-500" : " text-black hover:text-yellow-500"
          }>Contact</NavLink>
      </li>
    </ul>
  </div>
  </div>
</nav>

  )
}
