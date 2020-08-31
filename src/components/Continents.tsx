import React from 'react';
import { pieceHOC, IPieceProps } from './HOC/pieceHOC';
import { CONTINENTS } from '../graphql/actions';
import { Nested } from './nested/Nested';
import { NestedViewContinent } from './nested/NestedViewContinent';
import { IContinent } from '../domain/IContinent';

export const Continents: React.FC<IPieceProps> = ({ data }) => {
  const continents = {
    name: 'Continents',
    childs: data.continents,
  };

  console.log('conts', continents);

  return (
    <div className="page">
      <Nested name={continents.name}>
        <ul className="list-nested-view">
          {(continents.childs as IContinent[]).map((continent: IContinent, index: number) => (
            <NestedViewContinent key={index + continent.name} {...continent} />
          ))}
        </ul>
      </Nested>
    </div>
  );
};

export default pieceHOC(CONTINENTS, Continents);
