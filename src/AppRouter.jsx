import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import MenuPage from './pages/MenuPage';
import AboutPage from './pages/AboutPage';
import PressPage from './pages/PressPage';
import CateringPage from './pages/CateringPage';

import ContactPage from './pages/ContactPage';
import SweetBoxPage from './pages/SweetBoxPage';
import ProductDetail from './ProductDetail';
import ScrollToTop from './components/ScrollToTop';
import WelcomeScreen from './components/WelcomeScreen';

function AppRouter() {
    return (
        <div className="app">
            <WelcomeScreen />
            <ScrollToTop />
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/menu" element={<MenuPage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/articles" element={<PressPage />} />
                    <Route path="/catering" element={<CateringPage />} />

                    <Route path="/sweet-box" element={<SweetBoxPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/product/:id" element={<ProductDetail />} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
}

export default AppRouter;
