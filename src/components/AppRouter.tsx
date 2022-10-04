import React from 'react';
import { Route, Routes, Navigate} from 'react-router-dom';
import {publicRoutes, RouteNames} from '../routes/index';

const AppRouter = () => {
  return (
    <Routes>
        <Route path='/' element={<Navigate to={RouteNames.SIGN_IN} replace/>}/>
        {publicRoutes.map(route => <Route key={route.path} path={route.path} element={<route.element />} />)}
    </Routes>
  )
}

export default AppRouter;