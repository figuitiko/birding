import React from 'react'
import LogoContainer from './LogoContainer'
import Navigation from './Navigation'

const Header = () => {
  return (
   <header className='flex flex-col items-center p-5 bg-green-300 shadow-2xl '>
    <LogoContainer />
      <Navigation />
   </header>
  )
}

export default Header