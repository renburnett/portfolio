import { ReactNode } from 'react';
import { Navbar } from '../index';
import './Layout.scss';
import Footer from '../Footer/Footer';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Navbar />
      <div className='layout-container'>
        <main>
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
