import React, { useContext } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Collection from './pages/Collection'
import CategoryCollection from './pages/CategoryCollection'
import ProductDetails from './pages/ProductDetails'
import Footer from './components/Footer'
import Testimonial from './pages/Testimonial'
import Contact from './pages/Contact'
import Cart from './pages/Cart'
import MyOrders from './pages/MyOrders'
import PlaceOrder from './pages/PlaceOrder'
import Login from './components/Login'
import { ShopContext } from './context/ShopContext'
import { Toaster } from 'react-hot-toast'
import Sidebar from './components/admin/Sidebar'
import AdminLogin from './components/admin/AdminLogin'
import ProductList from './pages/admin/ProductList'
import AddProduct from './pages/admin/AddProduct'
import Orders from './pages/admin/Orders'
import Loading from './pages/Loading'

const App = () => {
  const {showUserLogin, isAdmin} = useContext(ShopContext);
  const location = useLocation()
  const isAdminPath = location.pathname.includes('admin')

  return (
    <main className='overflow-hidden text-tertiary'>
      {showUserLogin && <Login />}
      {!isAdminPath && <Header />}
      <Toaster position='bottom-right' />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/collection' element={<Collection />} />
        <Route path='/collection/:category' element={<CategoryCollection />} />
        <Route path='/collection/:category/:id' element={<ProductDetails />} />
        <Route path='/testimonial' element={<Testimonial />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/place-order' element={<PlaceOrder />} />
        <Route path='/my-orders' element={<MyOrders />} />
        <Route path='/loader' element={<Loading />} />
        <Route path='/admin' element={isAdmin ? <Sidebar /> : <AdminLogin />}>
          <Route index element={isAdmin ? <AddProduct /> : null} />
          <Route path='list' element={<ProductList />} />
          <Route path='orders' element={<Orders />} />
        </Route>
      </Routes>
      {!isAdminPath && <Footer />}
    </main>
  )
}

export default App