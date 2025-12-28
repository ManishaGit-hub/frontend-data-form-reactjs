import React from 'react'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import SuccessPage from './SuccessPage'
import App from '../App'

const router = createBrowserRouter([
    {
        path:'/',
        element:<App/>
    },
    {
        path:'/success',
        element:<SuccessPage/>,
    },
])

const Router=()=>{
    return <RouterProvider router={router}/>
}

export default Router