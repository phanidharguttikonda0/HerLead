import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from '../common/ScrollToTop';

const MainLayout = () => {
    return (
        <div className="flex flex-col min-h-screen bg-bg-light">
            <ScrollToTop />
            {/* Navigation */}
            <Navbar />

            {/* Page Content */}
            <main className="grow">
                <Outlet />
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default MainLayout;
