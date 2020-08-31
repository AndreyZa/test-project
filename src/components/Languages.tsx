import React from 'react';
import { pieceHOC, IPieceProps } from '../components/HOC/pieceHOC';
import { LANGUAGES } from '../graphql/actions';
import { ILanguage } from '../domain/ILanguage';
import { Nested } from '../components/nested/Nested';
import { NestedViewLanguage } from '../components/nested/NestedViewLanguage';

const Languages: React.FC<IPieceProps> = ({ data }) => {
  const languages = {
    name: 'Languages',
    childs: data.languages,
  };

  return (
    <div className="page">
      <Nested name={languages.name}>
        <ul>
          {(languages.childs as ILanguage[]).map((child: ILanguage, index: number) => (
            <NestedViewLanguage key={index + child.name} {...child} />
          ))}
        </ul>
      </Nested>
    </div>
  );
};

export default pieceHOC(LANGUAGES, Languages);
