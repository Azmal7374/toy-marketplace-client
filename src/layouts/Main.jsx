import React from 'react';
import Navbar from '../pages/share/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/share/Footer/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Main = () => {
    return (
        <div>
        <ToastContainer></ToastContainer>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;