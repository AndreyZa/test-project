import React from 'react';
import { ILanguage } from '../../domain/ILanguage';
import { NestedView } from './NestedView';
import { NestedListItem } from './NestedListItem';
import '../../styles/NestedView.css';

export const NestedViewLanguage: React.FC<ILanguage> = ({ name, native, code }) => (
  <NestedView name={name}>
    <NestedListItem className="nested-label list-item-nested-view">{code}</NestedListItem>
    <NestedListItem className="nested-label list-item-nested-view">{native}</NestedListItem>
  </NestedView>
);
