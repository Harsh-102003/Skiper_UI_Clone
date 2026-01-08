import React from 'react'
import Navpart1 from './Navpart1'
import Navpart2 from './Navpart2'


const Navbar = () => {
  return (
    <div className='flex justify-between items-center py-3 px-3'>
        <Navpart1/>
        <Navpart2/>
    </div>
  )
}

export default Navbar
