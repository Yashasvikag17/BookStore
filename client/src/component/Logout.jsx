import React, { useContext } from 'react'
import { AuthContext } from '../context/Authprovider';
import { useLocation, useNavigate } from 'react-router-dom';

function Logout() {
    const {Logout} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const handleLogout = () =>{
       Logout().then(() =>{
        alert("Sign-out !!")
       }).catch((error) =>{
        
       })
    }
  return (
    <div className='h-screen bg-teal-100 flex items-center justify-center'>
        <button className='bg-red-700 px-4 py-2 text-white rounded' onClick={handleLogout}>Logout</button>
      
    </div>
  )
}

export default Logout
