import React from 'react';
import { INested } from '../../contexts/nested/INested';
import { NestedContext } from '../../contexts/nested/NestedContext';

export interface INestedRootNode {
  root: boolean;
  value?: INested;
}

export const NestedRootNode: React.FC<INestedRootNode> = ({ root, value, children }) =>
  root ? (
    <NestedContext.Provider value={value as INested}>{children}</NestedContext.Provider>
  ) : (
    <div>{children}</div>
  );
