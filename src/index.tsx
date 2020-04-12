import React, { useMemo } from 'react';

import {
  GlobalStyles,
  Container,
  Brand,
  CardInfo,
  CardNumber,
  NameAndDate,
  CardName,
  CardExpirationDate,
  StripBlack,
  StripWhite,
} from './styles';

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

const Card: React.FC<Props> = ({
  brand,
  name,
  number,
  expiry,
  cvv,
  backgroundColor,
  filledBackgroundColor,
  flipCard,
  emptyName,
}) => {
  const cardNumber = useMemo(() => {
    let formattedValue;
    const value = String(number).substr(0, 16).replace(/\D/g, '');
    // american express, 15 digits
    if (/^3[47]\d{0,13}$/.test(value)) {
      formattedValue = value
        .replace(/(\d{4})/, '$1 ')
        .replace(/(\d{4}) (\d{6})/, '$1 $2 ');
    } else if (/^3(?:0[0-5]|[68]\d)\d{0,11}$/.test(value)) {
      // diner's club, 14 digits
      formattedValue = value
        .replace(/(\d{4})/, '$1 ')
        .replace(/(\d{4}) (\d{6})/, '$1 $2 ');
    } else if (/^\d{0,16}$/.test(value)) {
      // regular cc number, 16 digits
      formattedValue = value
        .replace(/(\d{4})/, '$1 ')
        .replace(/(\d{4}) (\d{4})/, '$1 $2 ')
        .replace(/(\d{4}) (\d{4}) (\d{4})/, '$1 $2 $3 ');
    }

    return formattedValue;
  }, [number]);

  return (
    <>
      <GlobalStyles />
      <Container
        data-testid="card"
        className={flipCard ? 'active' : ''}
        cvv={String(cvv).length > 2}
        backgroundColor={backgroundColor}
        filledBackgroundColor={filledBackgroundColor}
        notEmptyCard={!!name && !!number && !!expiry}>
        <div className="card__front card__part" data-testid="card-front">
          <Brand>
            {brand && <img src={brand} alt="Brand" data-testid="brand" />}
          </Brand>
          <CardInfo>
            <CardNumber data-testid="number">
              {cardNumber || '**** **** **** ****'}
            </CardNumber>
            <NameAndDate>
              <CardName data-testid="name">
                {name || emptyName || 'Cardholder Name'}
              </CardName>
              <CardExpirationDate data-testid="expiry">
                {expiry.substr(0, 5) || '00/00'}
              </CardExpirationDate>
            </NameAndDate>
          </CardInfo>
        </div>
        <div className="card__back card__part" data-testid="card-back">
          <div>
            <StripBlack />
            <StripWhite>
              <span data-testid="cvv">
                {cvv ? String(cvv).substr(0, 4) : '***'}
              </span>
            </StripWhite>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Card;
