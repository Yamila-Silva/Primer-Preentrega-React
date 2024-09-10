import './App.css';
import Contacto from './components/Contacto/Contacto.jsx'
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout.jsx';
import Error404 from './components/Error404/Error404.jsx';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx';
import CartContextProvider from './Context/CartContext.jsx';
import Cart from "./components/Cart/Cart.jsx"


function App() {

  return (
    <CartContextProvider> 
      <BrowserRouter>
          <div className="navbar-imagen">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrR1U-BXhLmAdpx0zbxUMtf-Hx1606KMn69w&s" alt="" />
          </div>
        <Layout>
          <Routes>
            <Route path="/" element={<ItemListContainer/>}/>
            <Route path="/Categorias/:categoriasDeId" element={<ItemListContainer />}/>
            <Route path="/Producto/:id" element={<ItemDetailContainer />}/>
            <Route path="/Contacto" element={<Contacto />}/>
            <Route path="/cart" element={<Cart />}/>
            <Route path="*" element={<Error404 />}/>
          </Routes>
        </Layout>
      </BrowserRouter>
    </CartContextProvider>
  )
}

export default App;
