import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

const NavBar = () => {
  const [selected, setSelected] = useState('Home');

  return (
    <nav className='bg-white px-6 py-4 shadow-md'>
      <div className='mx-auto flex max-w-7xl items-center justify-between'>
        <div className='flex items-center'>
          <img src='/src/assets/logo.svg' alt='Logo' />
        </div>

        <div className='flex items-center space-x-4'>
          <Button
            variant='ghost'
            className={`font-medium ${selected === 'Home' ? 'bg-[#E5E7EB]' : ''}`}
            onClick={() => setSelected('Home')}
          >
            Home
          </Button>
          <Button
            variant='ghost'
            className={`font-medium ${selected === 'Collection' ? 'bg-[#E5E7EB]' : ''}`}
            onClick={() => setSelected('Collection')}
          >
            Collection
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
