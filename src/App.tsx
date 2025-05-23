import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Form from './Components/Form';
import { DarkModeContext, DarkModeProvider } from './context/DarkModeContext';
import './App.css';
import { useContext } from 'react';

function AppRoutes() {
  const darkModeContext = useContext(DarkModeContext);

  return (
    <div className={darkModeContext?.darkMode ? 'App App-dark' : 'App App-light'}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <DarkModeProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </DarkModeProvider>
  );
}

export default App;
