import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import styles from './Layout.module.css';

function Layout(props) {
    return (
        <div className={styles.layout__container}>
            <Sidebar />
            <Outlet />
        </div>
    );
}

export default Layout;