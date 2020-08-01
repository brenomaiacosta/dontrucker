import React from 'react';

import Loading from '../components/loading';
import { useAuth } from '../context/auth.context';
import AppRoutes from './app.routes';
import AuthRoutes from '../routes/auth.routes';

const Routes = () => {
    return <AppRoutes />
}

export default Routes;