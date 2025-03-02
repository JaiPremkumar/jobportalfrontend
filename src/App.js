import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header';
import JobCart from './component/JobCart';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import JobDetails from './component/JobDetails';
import UserApply from './component/UserApply';
import Register from './component/Register';
import Login from './component/Login';
import { useEffect } from 'react';
import { loadUser } from './component/action/userAction';
import store from './component/store';
import Profile from './component/Profile';
import VendorJobs from './component/VendorJobs';
import EditRole from './component/EditRole';
import SetProfile from './component/SetProfile';

function App() {
  useEffect(()=>{
    store.dispatch(loadUser)
  },[])
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routes>
      <Route path='/jobs'element={<JobCart/>}/>
        <Route path='/job/:id'element={<JobDetails/>}/>
        <Route path='/Apply'element={<UserApply/>}/>
        <Route path='/'element={<Register/>}/>
        <Route path='/login'element={<Login/>}/>
        <Route path='/home'element={<Profile/>}/>
        <Route path='/applies'element={<VendorJobs/>}/>
        <Route path='/editDp'element={<EditRole/>}/>
        <Route path='/setDp'element={<SetProfile/>}/>
      </Routes>
      </BrowserRouter>
     
      
    </div>
  );
}

export default App;
