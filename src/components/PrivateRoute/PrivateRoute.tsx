import React from 'react';
import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
  isAllowed: boolean;
  children: JSX.Element;
}

export const PrivateRoute = ({ isAllowed, children }: ProtectedRouteProps) => {
  return isAllowed ? children : <Navigate to="/" />;
};
