import React from 'react';
import { ColumnContainer, ColumnTitle } from './styles';

interface ColumnProps {
  text: string;
}

// type that can enhance your props interface and add a definition for children there.
// type intersection.
export const Column = ({
  text,
  children,
}: React.PropsWithChildren<ColumnProps>) => {
  return (
    <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>
      {children}
    </ColumnContainer>
  );
};
