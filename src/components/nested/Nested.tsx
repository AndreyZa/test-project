import React, { useState } from 'react';
import '../../styles/Nested.css';

export interface INestedProps {
  name: string;
  withOutChildren?: boolean;
}

export const Nested: React.FC<INestedProps> = ({ name, withOutChildren = false, children }) => {
  const [showChildren, setShowChildren] = useState(false);

  const changeVisibilityOfChildren = () => setShowChildren(!showChildren);
  const baseClassName = 'nested-name nested-label';

  return (
    <div>
      <h3
        className={
          withOutChildren
            ? baseClassName
            : `${baseClassName} ${showChildren ? 'show-children' : ''}`
        }
        onClick={changeVisibilityOfChildren}
      >
        {name}
      </h3>
      {showChildren && children}
    </div>
  );
};
