import { ILanguage } from '../domain/ILanguage';
import { IContinent } from '../domain/IContinent';
import { ICountry } from '../domain/ICountry';

type ModifiedStructure = {
  __typename?: string;
};

// typings for received data from server
export interface ILanguageStructure extends ModifiedStructure, ILanguage {}
export interface ICountryStructure extends ModifiedStructure, ICountry {}
export interface IContinentStructure extends ModifiedStructure, IContinent {}

export interface IWrappedStructure {
  name: string;
  childs:
    | ILanguageStructure
    | IContinentStructure
    | ICountryStructure
    | ILanguageStructure[]
    | IContinentStructure[]
    | ICountryStructure[];
}
