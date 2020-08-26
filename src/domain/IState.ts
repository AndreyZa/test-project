import { ICountry } from './ICountry';

export interface IState {
  code?: string;
  name: string | undefined;
  country?: ICountry;
}
