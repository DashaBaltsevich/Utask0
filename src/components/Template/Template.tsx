import React from 'react';
import { TabBar } from '../TabBar';
import { AppBar } from '../AppBar';

export const Template = ({ children }: { children: JSX.Element }) => {
  return (
    <>
      <AppBar />
      {children}
      <TabBar />
    </>
  );
};
