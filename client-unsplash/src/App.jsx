import './App.css';
import HomePage from '@/pages/HomePage';
import NavBar from '@/components/NavBar';
import CollectionPage from '@/pages/CollectionPage';
import React, { useState } from 'react';

function App() {
  const [page, setPage] = useState('home');

  return (
    <>
      <NavBar onNavigate={setPage} />
      {page === 'home' && <HomePage />}
      {page === 'collections' && <CollectionPage />}
    </>
  );
}

export default App;
