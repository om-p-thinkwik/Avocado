import Navbar from './Components/Navbar';
import Form from './Components/Form';
import { useContext } from 'react';
import { DarkModeContext } from './context/DarkModeContext';
import SideDrawer from './Components/SideDrawer';

const Home = () => {
  const darkModeContext = useContext(DarkModeContext);
  return (
    <div className="flex">
      <Navbar
        className={darkModeContext?.darkMode ? `bg-gray-600` : `bg-gray-400`}
        name={'Om'}
        logoUrl={'https://images.unsplash.com/photo-1599566150163-29194dcaad36'}
        buttonsList={['About', 'Contact']}
      />
      <SideDrawer
        drawerItems={['Dashboard', 'User', 'Group', 'Logout']}
        className={'bg-gray-800 text-white'}
      />
      <Form className={'bg-white'} />
    </div>
  );
};

export default Home;
