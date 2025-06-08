"use client"
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';

interface PropsType {
  className?: string;
}

const Logo = ({ className }: PropsType) => {
    const router = useRouter()
    const logo ="https://rainbowit.net/html/inbio/assets/images/logo/logos-circle.png"
  return (
    <div  onClick={()=> router.push("/")} className='flex  gap-2  justify-center items-center  cursor-pointer'>
      <Image
        src={logo}
        alt="Logo"
        width={100}
        height={100}
        unoptimized
        className={`w-10 h-10 rounded-full border ${className}`}
      />
        <h1 className=' text-grayDeep text-xl font-bold'>Shah Alom</h1>
    </div>
  );
};

export default Logo;
