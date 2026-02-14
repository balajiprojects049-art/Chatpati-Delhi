import { Routes, Route } from 'react-router-dom';
import Home from './Home.jsx';
import ProductDetail from './ProductDetail.jsx';
import { menuItemsData } from './menuData.js';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home menuItems={menuItemsData} />} />
            <Route path="/product/:id" element={<ProductDetail menuItems={menuItemsData} />} />
        </Routes>
    );
}

export default App;
