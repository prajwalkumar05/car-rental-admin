import { 
  createBrowserRouter, 
  createRoutesFromElements, 
  Route, 
  RouterProvider 
} from 'react-router-dom'
import AddCars from "./pages/AddCars";

// layouts and pages
import Rootlayout from './layout/Rootlayout'
import AllOrders from './pages/AllOrders';
import Test from './pages/Test';
import Contact from './pages/Contact';
import Register from './pages/Register';
import Offers from './pages/Offers';
import RegisterDetails from './components/RegisterDetails';
import ContactDetails from './components/ContactDetails.js';
import OrderDetails from './components/OrderDetails';

// router and routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Rootlayout />}>
      <Route index element={<AllOrders />}  />
      <Route path='/addcars' element={<AddCars />}  />
      <Route path='/test' element={<Test /> }  />
      <Route path='/contact' element={<Contact /> }  />
      <Route path='/register' element={<Register /> }  />
      <Route path='/offers' element={<Offers /> }  />
      <Route path="/register/:slug" element={<RegisterDetails />} />
      <Route path="/contact/:id" element={<ContactDetails />} />
      <Route path="/order/:id" element={<OrderDetails />} />
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App