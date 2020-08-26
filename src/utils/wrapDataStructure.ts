import { ILanguage } from '../domain/ILanguage';
import { IContinent } from '../domain/IContinent';
import { ICountry } from '../domain/ICountry';
import { IWrappedStructure } from '../wrapped/IWrappedStructure';

export const wrapDataStructure = (
  structure: ILanguage | IContinent | ICountry
): IWrappedStructure => ({
  name: structure.name as string,
  childs: {
    ...structure,
    // clear ununecesary properties
    name: undefined,
    __typename: undefined,
  },
});
