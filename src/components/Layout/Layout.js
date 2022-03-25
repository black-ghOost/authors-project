import React from 'react';
import { Outlet } from 'react-router-dom';
import { StatusProvider } from '../../context/ContextStatus';
import Sidebar from '../Sidebar/Sidebar';
import styles from './Layout.module.css';

function Layout(props) {
    return (
        <div className={styles.layout__container}>
            <Sidebar />
            <StatusProvider>
                <Outlet />
            </StatusProvider>
        </div>
    );
}

export default Layout;