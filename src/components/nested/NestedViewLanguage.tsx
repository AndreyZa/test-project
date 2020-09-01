import React from 'react';
import { ILanguage } from '../../domain/ILanguage';
import { Nested } from './Nested';
import '../../styles/NestedView.css';

export const NestedViewLanguage: React.FC<ILanguage> = ({ name, native, code }) => (
  <div>
    <Nested name={name as string}>
      <ul className="list-nested-view">
        <li className="nested-label list-item-nested-view">{code}</li>
        <li className="nested-label list-item-nested-view">{native}</li>
      </ul>
    </Nested>
  </div>
);
