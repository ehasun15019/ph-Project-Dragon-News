import React, { use } from 'react'
import { AuthContext } from '../Provider/AuthContext'
import { Navigate, useLocation } from 'react-router';

const PrivateRoutes = ({children}) => {

    const { user, loading } = use(AuthContext);

    const location = useLocation()

    if(loading) {
        return (
            <div className='flex justify-center items-center h-[100vh]'>
                <span className="loading loading-spinner text-success"></span>
            </div>
        )
    }


    if(user && user.email){
        return children
    }

    return <Navigate to="/auth/login" state={{redirect: location}} replace></Navigate>
}

export default PrivateRoutes
