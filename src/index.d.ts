import React from 'react';
interface Props {
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
declare const Card: React.FC<Props>;
export default Card;
