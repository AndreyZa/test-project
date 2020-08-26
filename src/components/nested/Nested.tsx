import React, { useState } from 'react';
import '../../styles/Nested.css';

export interface INestedProps {
  name: string;
}

export const Nested: React.FC<INestedProps> = ({ name, children }) => {
  const [showChildren, setShowChildren] = useState(false);

  const changeVisibilityOfChildren = () => setShowChildren(!showChildren);

  return (
    <div>
      <h3
        className={`nested-name nested-label ${showChildren ? 'show-children' : ''}`}
        onClick={changeVisibilityOfChildren}
      >
        {name}
      </h3>
      {showChildren && children}
    </div>
  );
};
