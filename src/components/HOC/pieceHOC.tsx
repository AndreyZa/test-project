import React from 'react';
import { useQuery, DocumentNode } from '@apollo/client';
import { ILanguage } from '../../domain/ILanguage';
import { ICountry } from '../../domain/ICountry';
import { IContinent } from '../../domain/IContinent';

export interface IPieceProps {
  data: {
    languages?: ILanguage[];
    continents?: IContinent[];
    countries?: ICountry[];
  };
}

export type RootNode = 'Languages' | 'Continents' | 'Countries';

export const pieceHOC = (
  queryAction: DocumentNode,
  Component: React.ComponentType<IPieceProps>
): React.FC => {
  const Piece: React.FC = () => {
    const { loading, error, data } = useQuery(queryAction);

    if (loading) {
      return <span>Loading</span>;
    }

    if (error) {
      return <span>Error</span>;
    }
    console.log('Data', data);
    return <Component data={data} />;
  };

  return Piece;
};
