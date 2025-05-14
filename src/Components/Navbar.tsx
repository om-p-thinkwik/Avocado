import { useContext, type FC } from 'react';
import { DarkModeContext } from '../context/DarkModeContext';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

interface NavbarProps {
  name: string;
  logoUrl: string;
  className?: string;
  buttonsList?: string[];
}

const Navbar: FC<NavbarProps> = ({ name = '', logoUrl = '', className = '', buttonsList = [] }) => {
  const darkModeContext = useContext(DarkModeContext);

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 shadow-md p-4 flex justify-between gap-4 ${className}`}
    >
      <div className="flex flex-center items-center gap-4">
        <img src={logoUrl} alt="Logo" className="h-10 w-10 rounded-full" />
        <h2 className="text-xl font-semibold">{name}</h2>
      </div>
      <div>
        {buttonsList.map((item) => (
          <button className="hover:cursor-pointer shadow-md/40 p-2" key={item}>
            {item}
          </button>
        ))}
        <button
          className="ml-3 hover:cursor-pointer"
          onClick={() => darkModeContext?.toggleDarkMode()}
        >
          {darkModeContext?.darkMode ? <LightModeIcon /> : <DarkModeIcon />}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
