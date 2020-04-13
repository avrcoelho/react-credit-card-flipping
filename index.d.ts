import * as React from 'react';

export interface Props extends React.Props<Card> {
  brand?: string;
  name: string;
  number: string;
  expiry: string;
  cvv: number | string;
  backgroundColor?: string;
  filledBackgroundColor?: string;
  flipCard?: boolean;
  emptyName?: string;
}

declare class Card extends React.Component<Props, any> {}

declare module 'react-credit-card-flipping' {}

export default Card;
