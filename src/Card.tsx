import React from 'react';
import { CardContainer } from './styles';

interface CardPrpos {
  text: string;
}

export const Card = ({ text }: CardPrpos) => {
  return <CardContainer>{text}</CardContainer>;
};
