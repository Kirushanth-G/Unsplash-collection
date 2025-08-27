import React, { useState } from 'react';
import { Search } from 'lucide-react';
import axios from '@/api/axiosConfig';

const Hero = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = async () => {
    if (!searchQuery.trim()) return;
    try {
      const res = await axios.get(`/api/unsplash/search`, {
        params: { query: searchQuery },
      });
      console.log('Search results:', res.data);
      // TODO: handle/display results as needed
    } catch (err) {
      console.error('Search error:', err);
    }
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
          zIndex: 0,
          marginTop: '50px',
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

          <div className='mx-auto max-w-2xl' style={{ width: 380 }}>
            <form
              className='w-full'
              onSubmit={(e) => {
                e.preventDefault();
                handleSearch();
              }}
            >
              <div
                className='flex w-full items-center rounded-md bg-white px-3 shadow-xl'
                style={{
                  border: '1px solid #E5E7EB',
                }}
              >
                <input
                  type='text'
                  placeholder='Enter your keywords...'
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={handleKeyPress}
                  className='flex-1 bg-transparent py-4 text-[0.875rem] text-[121826] placeholder-[#cccccd] outline-none'
                  style={{ border: 'none' }}
                />
                <button
                  type='submit'
                  className='ml-2 flex items-center justify-center rounded-full p-2 transition-colors hover:bg-[#cccccd]/30'
                  tabIndex={0}
                  aria-label='Search'
                >
                  <Search size={20} color='#cccccd' />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
