import React from 'react';
import { ICountry } from '../../domain/ICountry';
import { IState } from '../../domain/IState';
import { ILanguage } from '../../domain/ILanguage';
import { NestedView } from './NestedView';
import { NestedListView } from './NestedListView';
import { NestedListItem } from './NestedListItem';

export const NestedViewCountry: React.FC<ICountry> = ({
  name,
  continent,
  capital,
  currency,
  languages,
  emoji,
  states,
}) => {
  return (
    <NestedView name={name + ` ${emoji}`}>
      <NestedListItem className="nested-label list-item-nested-view">
        {continent?.name}
      </NestedListItem>
      {capital ? (
        <NestedListItem className="nested-label list-item-nested-view">{capital}</NestedListItem>
      ) : null}
      {currency ? (
        <NestedListItem className="nested-label list-item-nested-view">{currency}</NestedListItem>
      ) : null}

      {(languages as ILanguage[]).length ? (
        <NestedListView name="Languages" list={languages as ILanguage[]} />
      ) : null}
      {(states as IState[]).length ? (
        <NestedListView name="States" list={states as IState[]} />
      ) : null}
    </NestedView>
  );
};
