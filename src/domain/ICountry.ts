import { ILanguage } from './ILanguage';
import { IState } from './IState';
import { IContinent } from './IContinent';
import { IGraphQLTypingReceivedData } from './IGraphQLTypingsReceivedData';

export interface ICountry extends IGraphQLTypingReceivedData {
  name?: string;
  continent?: IContinent;
  capital?: string;
  currency?: string;
  languages?: ILanguage[];
  emoji?: string;
  states?: IState[];
}
