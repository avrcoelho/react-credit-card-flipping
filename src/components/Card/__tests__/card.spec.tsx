import React from 'react';
import { render } from '@testing-library/react';

import Card from '../';

describe('Card', () => {
  it('Should be able  card data empty', () => {
    const { getByTestId, getByText } = render(
      <Card cvv="" number="" name="" expiry="" />,
    );

    expect(getByTestId('cvv')).toContainElement(getByText('***'));
    expect(getByTestId('number')).toContainElement(
      getByText('**** **** **** ****'),
    );
    expect(getByTestId('name')).toContainElement(getByText('Cardholder Name'));
    expect(getByTestId('expiry')).toContainElement(getByText('00/00'));
  });

  it('Should be able change empty cardholder name', () => {
    const { getByTestId, getByText } = render(
      <Card cvv="" number="" name="" expiry="" emptyName="Nome do titular" />,
    );

    expect(getByTestId('name')).toContainElement(getByText('Nome do titular'));
  });

  it('Should be able filled card data', () => {
    const { getByTestId, getByText } = render(
      <Card
        cvv="1234"
        number="9999999999999999"
        name="André V R Coelho"
        expiry="99/99"
      />,
    );

    expect(getByTestId('cvv')).toContainElement(getByText('1234'));
    expect(getByTestId('number')).toContainElement(
      getByText('9999 9999 9999 9999'),
    );
    expect(getByTestId('name')).toContainElement(getByText('André V R Coelho'));
    expect(getByTestId('expiry')).toContainElement(getByText('99/99'));
  });

  it('Should be able change background', () => {
    const { getByTestId } = render(
      <Card cvv="" number="" name="" expiry="" backgroundColor="#000" />,
    );

    expect(getByTestId('card-front')).toHaveStyle('background-color: #000');
  });

  it('Should be able change filled background', () => {
    const { getByTestId } = render(
      <Card
        cvv="123"
        number="9999 9999 9999 9999 9999"
        name="Tester"
        expiry="99/99"
        filledBackgroundColor="#000"
      />,
    );

    expect(getByTestId('card-front')).toHaveStyle('background-color: #000');
    expect(getByTestId('card-back')).toHaveStyle('background-color: #000');
  });

  it('Should be able flip card', () => {
    const { getByTestId } = render(
      <Card cvv="" number="" name="" expiry="" flipCard />,
    );

    expect(getByTestId('card')).toHaveClass('active');
  });

  it('Should be able don´t flip card', () => {
    const { getByTestId } = render(<Card cvv="" number="" name="" expiry="" />);

    expect(getByTestId('card')).not.toHaveClass('active');
  });
});
