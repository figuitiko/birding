import Link from 'next/link';
import React from 'react'

const Navigation = () => {
  return (       
      <div className='flex flex-col h-screen p-4 gap-4'>
        
        <div>
          <Link href='/'>Inicio</Link>
        </div>
        <div>
          <Link href='/story'>Sobre Nosotros</Link>
        </div>
        <div> 
          <Link href='/price'>Price</Link>
        </div>        
        <div> 
          <Link href='/contact'>Contacto</Link>
          </div>
      </div>  
  )
}

export default Navigation;