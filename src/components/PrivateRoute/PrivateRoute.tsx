import React from 'react';
import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
  isAllowed: boolean;
  redirectPath: string;
  children: JSX.Element;
}

export const PrivateRoute = ({
  isAllowed,
  redirectPath,
  children,
}: ProtectedRouteProps) => {
  if (isAllowed) {
    return children;
  } else {
    return <Navigate to={redirectPath} replace={true} />;
  }
};
