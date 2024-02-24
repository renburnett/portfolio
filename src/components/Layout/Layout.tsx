import { ReactNode } from 'react';
import { Navbar, Footer } from '../index';
import './Layout.scss';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className='layout-container'>
      <Navbar />
      <main>
        {children}
      </main>
      <Footer/>
    </div>
  );
};

export default Layout;
