import React from 'react';
import Navbar from './components/Navbar';
import ArticleList from './components/ArticleList';
import ThemeProvider from './components/contexts/Theme';


function App() {
  return (
    <div className='App'>
    <ThemeProvider>
      <Navbar />
      <ArticleList />
    </ThemeProvider>
    </div>

  );
}

export default App;
