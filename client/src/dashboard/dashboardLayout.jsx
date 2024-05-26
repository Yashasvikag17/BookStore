// import { Sidebar } from 'flowbite-react'
import React from 'react'
import { Outlet } from 'react-router-dom'
import  Sidebar  from './Slidebar'

function dashboardLayout() {
  return (
    <div className='flex gap-4 flex-col md:flex-row'>
        <Sidebar/>
      <Outlet/>

    </div>
  )
}

export default dashboardLayout
