import React from 'react';
import { IState } from '../../domain/IState';
import { IContinent } from '../../domain/IContinent';
import { Nested } from './Nested';
import { ICountry } from '../../domain/ICountry';
import '../../styles/NestedViewContinent.css';

// todo: refactor NestedView.tsx
export const NestedViewContinent: React.FC<IContinent> = ({ name, countries }) => {
  return (
    <div>
      <Nested name={name}>
        <ul className="list-nested-view">
          <li className="list-item-nested-view-continent">
            {countries.map((country: ICountry, index: number) => (
              <Nested
                key={index + country.name}
                name={country.name}
                withOutChildren={country.states.length === 0}
              >
                {!country.states.length ? null : (
                  <ul className="list-nested-view">
                    {country.states.map((state: IState, index: number) => (
                      <li key={state.name + index} className="nested-label list-item-nested-view">
                        {state.name}
                      </li>
                    ))}
                  </ul>
                )}
              </Nested>
            ))}
          </li>
        </ul>
      </Nested>
    </div>
  );
};
