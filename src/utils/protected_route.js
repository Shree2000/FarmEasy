import React from "react";
import { Route, Redirect } from "react-router-dom";
import Auth from '../utils/auth';

export const ProtectedRoute = ({
  component: Component,
  ...rest
}) => {
    console.log(sessionStorage.getItem('Auth'));
  return (
    <Route
      {...rest}
      render={props => {
        if (sessionStorage.getItem('Auth')=='yes'){
          return <Component {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/",
                state: {
                  from: props.location
                }
              }}
            />
          );
        }
      }}
    />
  );
};
