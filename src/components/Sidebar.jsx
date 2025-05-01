import { Outlet } from 'react-router-dom';
import styles from '../styles/Sidebar.module.css';
import AppNav from './AppNav';
import Footer from './Footer';
import Logo from './Logo';

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />

      <Outlet />

      <Footer />
    </div>
  );
};

export default Sidebar;
