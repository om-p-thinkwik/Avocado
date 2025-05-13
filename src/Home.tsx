import Navbar from './Components/Navbar';
import Form from './Components/Form';
import { useContext } from 'react';
import { DarkModeContext } from './context/DarkModeContext';

const Home = () => {
  const darkModeContext = useContext(DarkModeContext);
  return (
    <div className="flex">
      <Navbar
        className={darkModeContext?.darkMode ? `bg-gray-600` : `bg-gray-400`}
        name={'Om'}
        logoUrl={'https://images.unsplash.com/photo-1599566150163-29194dcaad36'}
      />
      <Form />
    </div>
  );
};

export default Home;
