import { Routes, Route } from 'react-router-dom';
import Home from './Home.jsx';
import ProductDetail from './ProductDetail.jsx';

function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
    );
}

export default AppRouter;
