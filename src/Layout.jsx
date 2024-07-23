import { Outlet } from 'react-router';
import Footer from './components/footer/Footer';
import { CartProvider } from './ContextApi';
function Layout() {

    return (
     <>
         <CartProvider>
      <div className="app-container">
      
        {/* <Header /> */}
        <div className="main-content">
        <Footer />
          <Outlet />
        </div>
        {/* <Footer /> */}
      </div>
    </CartProvider>
     </>
    )
  }
  
  export default Layout