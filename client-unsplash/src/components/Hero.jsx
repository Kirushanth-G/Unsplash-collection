import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

const Hero = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    console.log('Searching for:', searchQuery);
    // Add your search logic here
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className='relative min-h-screen w-full overflow-hidden'>
      {/* Background Image */}
      <div
        className='absolute inset-0 bg-cover bg-center bg-no-repeat'
        style={{
          backgroundImage: "url('/src/assets/hero-image.png')",
        }}
      ></div>

      {/* Content */}
      <div className='relative z-10 flex min-h-screen items-center justify-center px-6'>
        <div className='mx-auto max-w-4xl text-center'>
          {/* Large Heading */}
          <div className='mb-2 text-[2.25rem] leading-tight font-semibold text-[#121826]'>
            Search
          </div>

          <div className='mx-auto mb-12 max-w-2xl text-[0.875rem] leading-relaxed font-[300] text-[#121826]'>
            Search high-resolution images from Unsplash
          </div>
          {/* Search Bar */}
          <div className='mx-auto max-w-2xl'>
            <div className='flex items-center overflow-hidden rounded-full bg-white shadow-2xl'>
              <input
                type='text'
                placeholder='Enter your keywords...'
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={handleKeyPress}
                className='flex-1 bg-transparent px-8 py-4 text-lg text-gray-800 placeholder-gray-500 outline-none'
              />

              <Button
                onClick={handleSearch}
                className='m-2 rounded-full bg-blue-600 px-8 py-4 text-lg font-semibold text-white transition-colors duration-200 hover:bg-blue-700'
              >
                <Search />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
