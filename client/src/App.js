import{Routes,Route} from 'react-router-dom';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Homepage from './pages/Homepage';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import ProtectedRoute from './component/Routes/ProtectedRoute';
import PublicRoute from './component/Routes/PublicRoute';
import Donar from './pages/Dashboard/Donar';
import Hospitals from './pages/Dashboard/Hospitals';
import OrganisationPage from './pages/Dashboard/OrganisationPage';
import Consumer from './pages/Dashboard/Consumer';
import Donation from './pages/Donation';
import Analytics from './pages/Dashboard/Analytics';
import DonarList from './pages/Admin/DonarList';
import HospitalList from './pages/Admin/HospitalList';
import OrgList from './pages/Admin/OrgList';
import AdminHome from './pages/Admin/AdminHome';
function App() {
  return (
    <>
    <ToastContainer/>
     <Routes>
      <Route path='/' element={<ProtectedRoute><Homepage/></ProtectedRoute>}/>
      <Route path='/donar' element={<ProtectedRoute><Donar/></ProtectedRoute>}/>
      <Route path='/hospital' element={<ProtectedRoute><Hospitals/></ProtectedRoute>}/>
      <Route path='/admin' element={<ProtectedRoute><AdminHome/></ProtectedRoute>}/>
      
      <Route path="/login" element={<PublicRoute><Login/></PublicRoute>}/>
      <Route path="/register" element={<PublicRoute><Register/></PublicRoute>}/>
      <Route path='/orgnaisation' element={<ProtectedRoute><OrganisationPage/></ProtectedRoute>}/>
      <Route path='/consumer' element={<ProtectedRoute><Consumer/></ProtectedRoute>}/>
      <Route path='/donation' element={<ProtectedRoute><Donation/></ProtectedRoute>}/>
      <Route path='/Analytics' element={<ProtectedRoute><Analytics/></ProtectedRoute>}/>
      <Route path='/donar-list' element={<ProtectedRoute><DonarList/></ProtectedRoute>}/>
      <Route path='/hospital-list' element={<ProtectedRoute><HospitalList/></ProtectedRoute>}/>
      <Route path='/org-list' element={<ProtectedRoute><OrgList/></ProtectedRoute>}/>
      {/* <Route path='/' element={<Homepage/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/> */}
     </Routes>
    </>
  );
}

export default App;
