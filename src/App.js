import React from 'react';
import Navbar from './components/Navbar';
import ArticleList from './components/ArticleList';
import ThemeProvider from './components/contexts/Theme';
import ThemeToggle from './components/ThemeToggle';


function App() {
  return (
    <div className='App'>
    <ThemeProvider>
      <Navbar />
      <ArticleList />
      <ThemeToggle />
    </ThemeProvider>
    </div>

  );
}

export default App;
