import { React, Suspense } from 'react';
import { Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

import Loading from './_components/Loading';
import PublicRoute from './_utility/routes/PublicRoute';
import PrivateRoute from './_utility/routes/PrivateRoute';

import LoginPage from './_pages/auth/LoginPage';
import RegisterPage from './_pages/auth/RegisterPage';
import DashboardPage from './_pages/dashboard/DashboardPage';

export default function App() {
  return (
    <Switch>
      <Suspense fallback={'LOading...'}>
        <PublicRoute exact path="/register" component={RegisterPage} />
        <PublicRoute exact path="/login" component={LoginPage} />
        <PrivateRoute path="/dashboard" component={DashboardPage} />
      </Suspense>
    </Switch>
  );
}
