import React from 'react';
import Navbar from './components/Navbar';
import ArticleList from './components/ArticleList';
import ThemeProvider from './components/contexts/Theme';
import ThemeToggle from './components/ThemeToggle';
import AuthContextProvider from './components/contexts/AuthContext';


function App() {
  return (
    <div className='App'>
    <ThemeProvider>
     <AuthContextProvider>
        <Navbar />
        <ArticleList />
        <ThemeToggle />
      </AuthContextProvider>
    </ThemeProvider>
    </div>
  );
}

export default App;
