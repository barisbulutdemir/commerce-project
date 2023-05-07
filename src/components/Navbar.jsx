import React, { useEffect, useState } from 'react'
import { HeartIcon, MagnifyingGlassIcon, ShoppingBagIcon } from '@heroicons/react/24/outline'
import logo from '../assets/logo.png'

export const Navbar = () => {

  const [navState, setNavState] = useState(false);

  {/* Blur efekti için if koşulu yazıyoruz. scoll 30 dan büyükse setnavstate tetiklenir */}
  const onNavScroll= () => {
    if (window.scrollY > 30) {
      setNavState(true);
    } else {
      setNavState(false);
    }
  }
  
  {/* use effectle de bunu uyguluyoruz. Not: Removelamayı unutma */}
  useEffect(() => {
    window.addEventListener('scroll', onNavScroll);

    return () => {
      window.removeEventListener('scroll', onNavScroll);
    }

  },[])

  return (
    <div>
      
      <header className={
        
        !navState ? 'absolute top-7 left-0 right-0 opacity-100 z-50' :'fixed top-0 left-0 right-0 h-[9vh] flex items-center justify-center opacity-100 z-[200] blur-effect-theme'
      }> 
      {/* Yukarıda navState in false olması durumunda sabit kalsın aktif olduğu durumda blurla  */}
        <nav className='flex items-center justify-between nike-container text-black'>
          <div className='flex items-center '>
            <img src={logo} alt='logo/img' className={`w-16 h-auto ${navState && "filter brightness-0"}`}/>
            
          </div>

          <ul className={`flex items-center justify-center gap-2 `}>
            <li> <MagnifyingGlassIcon className={` icon-style ${navState && "filter brightness-0"}`} /> </li>
            <li> <HeartIcon className={` icon-style ${navState && "filter brightness-0"}`} /> </li>
            <li className='grid items-center'>
              <button className='border-none outline-none active:scale-110 transition-all duration-300 relative' type='button'> <ShoppingBagIcon
             className={` icon-style ${navState && "filter brightness-0"}`}/><div className={`absolute flex top-4 right-0 bg-white
               -slate-900 shadow shadow-slate-100 w-4 h-4 text-[0.65rem] leading-tight
               font-medium rounded-full justify-center items-center cursor-pointer hover:scale-110 transition-all duration-300 `}>0</div> </button>
             </li>



          </ul>
        </nav>
      </header>
    </div>
  )
}
export default Navbar;
