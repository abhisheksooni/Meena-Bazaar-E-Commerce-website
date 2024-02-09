import React from 'react'
import { Outlet} from 'react-router-dom' 
import Nav from '../Components/Nav/Nav'

function Root() {
  return (
    <div className='bg-color1 max-w-[1800px] mx-auto px-5 lg:px-12'>

        <Nav/>
        <Outlet/>

    </div>
  )
}

export default Root