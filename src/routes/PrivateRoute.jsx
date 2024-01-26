import React, { Children, useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    if(loading){
        return <Spinner className='position-absolute start-50 top-50' animation="grow" variant="danger" />
    }
    if(user){
        return children;
    }
    else{
        return <Navigate to='/login' state={{from: location}} replace/>
    }
};

export default PrivateRoute;