
import './App.css';
import Home from './Pages/Home';
import Register from './Pages/Register';
import Library from './Pages/Library';
import Login from './Pages/Login';
import { BrowserRouter,Navigate,Route,Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import { useUser } from './Providers/UserProvider';

function App() {
  const {getToken} = useUser();

  function ProtectedRoutes ({children}){
    if (getToken){
      return children
    }else{
      <Navigate to="/login" />
    }
  }
  return (
    <div >
      <BrowserRouter>
      <Navbar />  
<Routes>
  <Route path='/' element={< Home />} />
  <Route path='/Register' element={< Register />} />
  
  <Route path='/Login' element={< Login />} />
  <Route path='/Library' element={
  <ProtectedRoutes>
< Library />
</ProtectedRoutes>} />

</Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
