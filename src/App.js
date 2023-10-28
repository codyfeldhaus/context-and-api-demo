import './App.css';
import { ThemeProvider } from './context/ThemeContext';
import ToggleThemeButton from './components/ToggleThemeButton';
import UserInfo from './components/UserInfo';


function App() {
  return (
    <ThemeProvider>
      <div>
        <h1>Context and API Demo</h1>
        <UserInfo />
        <ToggleThemeButton/>
      </div>
    </ThemeProvider>
    
  );
}

export default App;
