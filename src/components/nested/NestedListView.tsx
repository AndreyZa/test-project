import React from 'react';
import { ILanguage } from '../../domain/ILanguage';
import { IState } from '../../domain/IState';
import { ICountry } from '../../domain/ICountry';
import { Nested } from './Nested';
import { NestedListItem } from './NestedListItem';

export interface INestedListViewProps {
  name: string;
  list: any[];
}

export const NestedListView: React.FC<INestedListViewProps> = ({ name, list }) => (
  <Nested name={name}>
    {
      <ul className="list-nested-view">
        {list.map((listItem: ILanguage | IState | ICountry, index: number) => (
          <NestedListItem
            key={(listItem.name as string) + index}
            className="nested-label list-item-nested-view"
          >
            {listItem.name}
          </NestedListItem>
        ))}
      </ul>
    }
  </Nested>
);
