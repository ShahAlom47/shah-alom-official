
import React from 'react';
import NavLinks from './NavLinks';

const Navbar = () => {
    return (
        <div className='flex justify-between items-center p-4 bg-blackLight text-white'>
          <div className=' flex gap-2'>
            <NavLinks/>
          </div>
            
        </div>
    );
};

export default Navbar;