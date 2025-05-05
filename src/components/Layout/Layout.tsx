import React, { ReactNode, useEffect, useState } from 'react';
import { useGlobal } from '../../contexts/Global';
import { Navbar } from '../index';
import Footer from '../Footer/Footer';
import './Layout.scss';
import { Modal, ModalHeader, ModalContent, ModalActions, Button } from 'semantic-ui-react';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Navbar />
      <div className='layout-container'>
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
