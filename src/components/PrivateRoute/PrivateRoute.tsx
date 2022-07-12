import React from 'react';
import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
  isAllowed: boolean;
  children: JSX.Element;
}

export const PrivateRoute = ({ isAllowed, children }: ProtectedRouteProps) => {
  if (isAllowed) {
    return children;
  } else {
    return <Navigate to="/login" replace={true} />;
  }
};
