import { list } from 'postcss';
import React from 'react'

export const Footer = ({footerAPI: {titles, links}}) => {
  return (
    <div className='bg-theme pt-7 pb-5 '>

        <div className='nike-container text-slate-200'>
            <div className='grid  grid-cols-3 max-h-2xl w-full m-auto md:max-w-none'>
            {titles.map((val,i) =>(
                <div key={i} className=' grid items-center mb-5'>
                    <h1 className='text-lg lg:text-base md:text-sm uppercase font-semibold text-left'>{val.title}</h1>
                </div>
            ))}
            
            {links.map((list,i) => (
                <ul key={i} className=' grid items-center gap-0.5 '>
                    {list.map((link,i) =>(
                        <li key={i} className=' text-sm sm:text-xsm'> {link.link}</li>
                    ))}
                </ul>
            ))}
            </div>
            <div className='mt-5 text-center'>
                <p className='text-sm md:text-center'>Copyright<sup className='text-base font-bold'>&copy; </sup>
                 All Reserved Rights 2023 <span className='font-semibold'>Baris B. Demir </span>

                </p>
            </div>
        </div>
    
    </div>


  )
}


export default Footer;