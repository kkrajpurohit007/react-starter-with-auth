import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import EmptyLayout from '../../_components/layout/EmptyLayout';

const PublicRoute = ({ component: Component, restricted, ...rest }) => {
  const isLogin = true;
  return (
    <Route
      {...rest}
      render={props =>
        isLogin ? (
          <Redirect to="/dashboard" />
        ) : (
          <Route
            {...rest}
            render={props => (
              <EmptyLayout>
                <Component {...props} />
              </EmptyLayout>
            )}
          />
        )
      }
    />
  );
};

export default PublicRoute;
