import React from 'react';
import { IWrappedStructure } from '../../wrapped/IWrappedStructure';
import { Nested } from './Nested';
import '../../styles/NestedView.css';

export const NestedView: React.FC<IWrappedStructure> = ({ name, childs }) => {
  return (
    <div>
      <Nested name={name}>
        <ul className="list-nested-view">
          {Object.entries(childs).map(([key, value], index) => {
            return value ? (
              <li
                key={String(index) + key + String(value)}
                className="nested-label list-item-nested-view"
              >
                {value}
              </li>
            ) : null;
          })}
        </ul>
      </Nested>
    </div>
  );
};
