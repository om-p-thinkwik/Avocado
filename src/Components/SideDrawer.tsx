import { useState, type FC, type JSX } from 'react';
import {
  CloseIcon,
  DashboardIcon,
  GroupIcon,
  LogoutIcon,
  MenuIcon,
  UserIcon,
} from '../assets/icons';

interface DrawerProps {
  drawerItems: string[];
  className?: string;
}

const iconMap: Record<string, JSX.Element> = {
  Dashboard: <DashboardIcon />,
  User: <UserIcon />,
  Group: <GroupIcon />,
  Logout: <LogoutIcon />,
};

const SideDrawer: FC<DrawerProps> = ({ drawerItems = [], className = '' }) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  return (
    <div
      className={`absolute top-0 left-0 bottom-0 ${isOpen ? 'w-64' : 'w-20'} shadow-lg p-4 transition-all duration-300 ${className}`}
    >
      <div className="flex items-center justify-between mb-6">
        {isOpen && <p className="text-2xl font-bold">Drawer</p>}
        <div className="ml-2 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <CloseIcon /> : <MenuIcon />}
        </div>
      </div>

      <ul className="space-y-4">
        {drawerItems.map((item) => (
          <li
            key={item}
            className={`flex items-center space-x-3 p-2 rounded-lg hover:cursor-pointer transition ${isOpen ? 'hover:bg-gray-700' : ''}`}
          >
            {iconMap[item]}
            {isOpen && <span className="text-lg">{item}</span>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideDrawer;
