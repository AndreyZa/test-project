import React from 'react';
import { useNested } from '../../hooks/useNested';

export const NestedListItem: React.FC<any> = (props) => {
  const { hideNestedHierarchy } = useNested();
  return (
    <React.Fragment>
      <li {...props} onClick={hideNestedHierarchy}>
        {props.children}
      </li>
    </React.Fragment>
  );
};
