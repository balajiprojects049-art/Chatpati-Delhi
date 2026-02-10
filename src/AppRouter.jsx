import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import MenuPage from './pages/MenuPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ProductDetail from './ProductDetail';
import ScrollToTop from './components/ScrollToTop';

function AppRouter() {
    return (
        <div className="app">
            <ScrollToTop />
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/menu" element={<MenuPage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/product/:id" element={<ProductDetail />} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
}

export default AppRouter;
