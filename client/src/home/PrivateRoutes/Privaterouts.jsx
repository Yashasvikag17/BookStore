import React, { useContext } from 'react'
import { AuthContext } from '../../context/Authprovider'
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'flowbite-react';
function Privaterouts(children) {
    const {user,loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <div className='text-center'>
        <Spinner aria-lable="Center-aligned spinner example"/>
        </div>
    }
    if(user){
        return children;
    }
  return (
    <div>
      <Navigate to="/login" state={{from:location}} replace></Navigate>
    </div>
  )
}

export default Privaterouts
