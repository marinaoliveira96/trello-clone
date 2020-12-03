import { CardContainer } from './styles';

interface CardPrpos {
  text: string;
  index: number;
}

export const Card = ({ text }: CardPrpos) => {
  return <CardContainer>{text}</CardContainer>;
};
