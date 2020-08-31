import { ILanguage } from '../domain/ILanguage';
import { IContinent } from '../domain/IContinent';
import { ICountry } from '../domain/ICountry';
import { IState } from '../domain/IState';

// todo: refactor wrapped logic
export interface IWrappedStructure {
  name: string;
  childs: ILanguage | IContinent | ICountry | ILanguage[] | IContinent[] | ICountry[];
}

export interface IWrapped {
  name: string;
  childs: ILanguage[] | ICountry[] | IContinent[] | IState[];
}
