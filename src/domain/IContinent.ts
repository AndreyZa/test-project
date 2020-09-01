import { ICountry } from './ICountry';
import { IGraphQLTypingReceivedData } from './IGraphQLTypingsReceivedData';

export interface IContinent extends IGraphQLTypingReceivedData {
  code?: string;
  name?: string;
  countries?: ICountry[];
}
