import React, { useState } from 'react';
import { INested } from '../../contexts/nested/INested';
import { NestedRootNode } from '../nested/NestedRootNode';
import '../../styles/Nested.css';

export interface INestedProps {
  name: string;
  withOutChildren?: boolean;
  root?: boolean;
}

export const Nested: React.FC<INestedProps> = ({
  name,
  withOutChildren = false,
  root = false,
  children,
}) => {
  const [showChildren, setShowChildren] = useState<INested>({ show: false });

  const changeVisibilityOfChildren = () =>
    setShowChildren({ ...showChildren, show: !showChildren.show });
  const baseClassName = 'nested-name nested-label';

  return (
    <NestedRootNode
      root={root}
      value={{ show: showChildren.show, setShow: changeVisibilityOfChildren }}
    >
      <div>
        <h3
          className={
            withOutChildren
              ? baseClassName
              : `${baseClassName} ${showChildren.show ? 'show-children' : ''}`
          }
          onClick={changeVisibilityOfChildren}
        >
          {name}
        </h3>
        {showChildren.show && children}
      </div>
    </NestedRootNode>
  );
};
