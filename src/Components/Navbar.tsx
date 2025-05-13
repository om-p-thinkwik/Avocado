import { useContext, type FC } from 'react';
import { DarkModeContext } from '../context/DarkModeContext';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

interface NavbarProps {
  name: string;
  logoUrl: string;
  className?: string;
}

const Navbar: FC<NavbarProps> = ({ name = '', logoUrl = '', className = '' }) => {
  const darkModeContext = useContext(DarkModeContext);

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 shadow-md p-4 flex justify-between gap-4 ${className}`}
    >
      <div className="flex flex-center items-center gap-4">
        <img src={logoUrl} alt="Logo" className="h-10 w-10 rounded-full" />
        <h2 className="text-xl font-semibold">{name}</h2>
      </div>
      <button className="justify-self-end" onClick={() => darkModeContext?.toggleDarkMode()}>
        {darkModeContext?.darkMode ? <LightModeIcon /> : <DarkModeIcon />}
      </button>
    </div>
  );
};

export default Navbar;
