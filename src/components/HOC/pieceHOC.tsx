import React from 'react';
import { useQuery, DocumentNode } from '@apollo/client';
import { ILanguage } from '../../domain/ILanguage';
import { ICountry } from '../../domain/ICountry';
import { IContinent } from '../../domain/IContinent';
import { Nested } from '../nested/Nested';

export interface IPieceProps {
  name: string;
  data: {
    [key in string]: ILanguage[] | IContinent[] | ICountry[];
  };
}

export type RootNode = 'Languages' | 'Continents' | 'Countries';

export const pieceHOC = (queryAction: DocumentNode, name: RootNode): React.FC => {
  const Piece: React.FC = ({ children }) => {
    const { loading, error, data } = useQuery(queryAction);

    if (loading) {
      return <span>Loading</span>;
    }

    if (error) {
      return <span>Error</span>;
    }

    // end context
    return (
      <div className="piece">
        <Nested name={name} root>
          <ul>
            {data[name.toLowerCase()].map(
              (fetchedData: ILanguage | IContinent | ICountry, index: number) =>
                // @ts-ignore
                React.cloneElement(children, { key: index + fetchedData.name, ...fetchedData })
            )}
          </ul>
        </Nested>
      </div>
    );
  };

  return Piece;
};
