import { ReactNode } from 'react';
import Navbar from '../Navbar/Navbar';
import './Layout.scss';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className='layout-container'>
      <main>
        <Navbar />
        {children}
      </main>
      <footer className='footer'>
        <p>&copy; 2024 Your Website</p>
      </footer>
    </div>
  );
};

export default Layout;
