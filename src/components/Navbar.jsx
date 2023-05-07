import React from 'react'
import { HeartIcon, MagnifyingGlassIcon, ShoppingBagIcon } from '@heroicons/react/24/outline'
import logo from '../assets/logo.png'

export const Navbar = () => {
  return (
    <div>
      
      <header className={`absolute top-12 left-0 right-0 opacity-100 z-50`}>
        <nav className='flex items-center justify-between nike-container'>
          <div className='flex items-center '>
            <img src={logo} alt='logo/img' className='w-16 h-auto'/>
            
          </div>

          <ul className='flex items-center justify-center gap-2'>
            <li> <MagnifyingGlassIcon className='icon-style' /> </li>
            <li> <HeartIcon className='icon-style' /> </li>
            <li className='grid items-center'>
              <button className='border-none outline-none active:scale-110 transition-all duration-300 relative' type='button'> <ShoppingBagIcon
             className='icon-style'/><div>0</div> </button>
             </li>



          </ul>
        </nav>
      </header>
    </div>
  )
}
export default Navbar;