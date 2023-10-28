import './App.css';
import { useContext, useEffect } from 'react';
import {ThemeContext, ThemeProvider} from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <h1>Context and API Demo</h1>
    </ThemeProvider>
  );
}

export default App;
