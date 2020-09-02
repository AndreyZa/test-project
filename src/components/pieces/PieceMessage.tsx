import React from 'react';
import '../../styles/PieceMessage.css';

type PieceMessage = 'Loading' | 'Error';

export interface IPieceMessage {
  title: string;
  message: PieceMessage;
}

export const PieceMessage: React.FC<IPieceMessage> = ({ title, message }) => (
  <span className="piece-message">{`${title} - ${message}`}</span>
);
