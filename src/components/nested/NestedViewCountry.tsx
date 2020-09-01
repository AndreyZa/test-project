import React from 'react';
import { ICountry } from '../../domain/ICountry';
import { IState } from '../../domain/IState';
import { ILanguage } from '../../domain/ILanguage';
import { Nested } from './Nested';
import { NestedListView } from './NestedListView';

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
    <div>
      <Nested name={name + ` ${emoji}`}>
        <ul className="list-nested-view">
          <li className="nested-label list-item-nested-view">{continent?.name}</li>
          {capital ? <li className="nested-label list-item-nested-view">{capital}</li> : null}
          {currency ? <li className="nested-label list-item-nested-view">{currency}</li> : null}
          {(languages as ILanguage[]).length ? (
            <NestedListView name="Languages" list={languages as ILanguage[]} />
          ) : null}
          {(states as IState[]).length ? (
            <NestedListView name="States" list={states as IState[]} />
          ) : null}
        </ul>
      </Nested>
    </div>
  );
};
