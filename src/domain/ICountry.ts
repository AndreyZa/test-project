import { ILanguage } from './ILanguage';
import { IState } from './IState';
import { IContinent } from './IContinent';

export interface ICountry {
  code?: string;
  name: string | undefined;
  native?: string;
  phone?: string;
  continent?: IContinent;
  capital?: string;
  currency?: string;
  languages?: ILanguage[];
  emoji?: string;
  states?: IState[];
}
