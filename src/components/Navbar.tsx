import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <div className='flex justify-between items-center p-4 bg-gray-800 text-white'>
            <Link href="/" className="text-blue-500 hover:text-blue-700">
                Home    
            </Link>
            <Link href="/login" className="ml-4 text-blue-500 hover:text-blue-700">
                Login  
            </Link>
            
        </div>
    );
};

export default Navbar;