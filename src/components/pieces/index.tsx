import React from 'react';
import { pieceHOC } from '../HOC/pieceHOC';
import { LANGUAGES, CONTINENTS, COUNTRIES } from '../../graphql/actions';

import { NestedViewLanguage } from '../nested/NestedViewLanguage';
import { NestedViewContinent } from '../nested/NestedViewContinent';
import { NestedViewCountry } from '../nested/NestedViewCountry';

const BindedLanguages = pieceHOC(LANGUAGES, 'Languages');
const BindedContinents = pieceHOC(CONTINENTS, 'Continents');
const BindedCountries = pieceHOC(COUNTRIES, 'Countries');

export const Languages: React.FC = () => (
  <BindedLanguages>
    <NestedViewLanguage />
  </BindedLanguages>
);

export const Continents: React.FC = () => (
  <BindedContinents>
    <NestedViewContinent />
  </BindedContinents>
);

export const Countries: React.FC = () => (
  <BindedCountries>
    <NestedViewCountry />
  </BindedCountries>
);
