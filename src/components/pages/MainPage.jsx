import React from 'react'
import { useState } from 'react';
import { About } from '../About';
import { Footer } from '../Footer';
import { Home } from '../Home';
import { Navbar } from '../Navbar';
import { ServicesContact } from '../ServicesContact';
import { Sidebar } from '../Sidebar';
import  Loading  from '../Loading';

export const MainPage = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <Loading/>
            <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <Sidebar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <Home />
            <About />
            <ServicesContact />
            <Footer />   
        </>
    )
}
