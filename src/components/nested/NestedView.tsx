import React from 'react';
import { Nested } from './Nested';
import '../../styles/NestedView.css';

export interface INestedViewProps {
  name?: string;
}

export const NestedView: React.FC<INestedViewProps> = ({ name = '', children }) => (
  <div>
    <Nested name={name}>
      <ul className="list-nested-view">{children}</ul>
    </Nested>
  </div>
);
