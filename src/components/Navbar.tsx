import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <div className='flex justify-between items-center p-4 bg-gray-800 text-white'>
            <Link href="/" className="text-blue-500 hover:text-blue-700 text-primaryText">
                Home    
            </Link>
            <Link href="/login" className="ml-4 text-blue-500 hover:text-blue-700">
                Login  
            </Link>

            <div className=' bg-primaryRed w-10 h-5'></div>
            <div className=' bg-blackDeep w-10 h-5'></div>
            <div className=' bg-blackMid w-10 h-5'></div>
            <div className=' bg-blackLight w-10 h-5'></div>
            <div className=' bg-grayLight w-10 h-5'></div>
            <div className=' bg-grayDeep w-10 h-5'></div>
            
        </div>
    );
};

export default Navbar;