import React, { useState } from 'react';
import Header from "./components/Header"
import HomePage from "./pages/Home"
import type { Page } from './types';
import Footer from './components/Footer';

const App = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  return (
    <React.Fragment>
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <HomePage setCurrentPage={setCurrentPage} />
      <Footer />
    </React.Fragment>
  )
}

export default App
