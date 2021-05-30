import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import DashboardLayout from '../../_components/layout/DashboardLayout';

export const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      localStorage.getItem('user') ? (
        <Route
          {...rest}
          render={props => (
            <DashboardLayout>
              <Component {...props} />
            </DashboardLayout>
          )}
        />
      ) : (
        <Redirect
          to={{ pathname: '/login', state: { from: props.location } }}
        />
      )
    }
  />
);

export default PrivateRoute;
