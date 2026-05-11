import React from 'react';
import Header from './Header';
import Footer from './Footer';
import ScrollIndicator from '../ui/ScrollIndicator';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">{children}</main>
            <ScrollIndicator />
            <Footer />
        </div>
    );
};

export default Layout;