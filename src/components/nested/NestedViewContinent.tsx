import React from 'react';
import { IState } from '../../domain/IState';
import { IContinent } from '../../domain/IContinent';
import { Nested } from './Nested';
import { NestedView } from './NestedView';
import { NestedListView } from './NestedListView';
import { ICountry } from '../../domain/ICountry';
import '../../styles/NestedViewContinent.css';

export const NestedViewContinent: React.FC<IContinent> = ({ name, countries }) => (
  <NestedView name={name}>
    <li className="list-item-nested-view-continent">
      {(countries as ICountry[]).map((country: ICountry, index: number) => (
        <Nested
          key={index + (country.name as string)}
          name={country.name + ` ${country.emoji}`}
          withOutChildren={(country.states as IState[]).length === 0}
        >
          <ul className="list-nested-view list-item-nested-view-continent">
            {(country.states as IState[]).length ? (
              <NestedListView name={'States'} list={country.states as IState[]} />
            ) : null}
          </ul>
        </Nested>
      ))}
    </li>
  </NestedView>
);
