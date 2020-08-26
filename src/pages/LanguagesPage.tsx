import React from 'react';
import { useQuery } from '@apollo/client';
import { ILanguage } from '../domain/ILanguage';
import { LANGUAGES } from '../graphql/actions';
import { wrapDataStructure } from '../utils/wrapDataStructure';
import { NestedView } from '../components/nested/NestedView';
import { IWrappedStructure } from '../wrapped/IWrappedStructure';
import { Nested } from '../components/nested/Nested';

export const LanguagesPage: React.FC = () => {
  const { loading, error, data } = useQuery(LANGUAGES);

  if (loading) return <span>Loading</span>;
  if (error) return <span>Error</span>;

  const languages = {
    name: 'Languages',
    childs: data.languages.map((language: ILanguage) => wrapDataStructure(language)),
  };

  return (
    <div className="language">
      <Nested name={languages.name}>
        <ul>
          {languages.childs.map((child: IWrappedStructure, index: number) => (
            <NestedView key={index + child.name} {...child} />
          ))}
        </ul>
      </Nested>
    </div>
  );
};
