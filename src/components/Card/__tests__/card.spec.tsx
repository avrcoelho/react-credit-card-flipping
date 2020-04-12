import React from 'react';
import { render } from '@testing-library/react';

import Card from '../';

describe('Card', () => {
  it('Should be able  card data empty', () => {
    const { getByTestId, getByText } = render(
      <Card cvv="" number="" name="" expirate="" />,
    );

    expect(getByTestId('cvv')).toContainElement(getByText('***'));
    expect(getByTestId('number')).toContainElement(
      getByText('**** **** **** ****'),
    );
    expect(getByTestId('name')).toContainElement(getByText('Cardholder Name'));
    expect(getByTestId('expirate')).toContainElement(getByText('00/00'));
  });

  it('Should be able change empty cardholder name', () => {
    const { getByTestId, getByText } = render(
      <Card cvv="" number="" name="" expirate="" emptyName="Nome do titular" />,
    );

    expect(getByTestId('name')).toContainElement(getByText('Nome do titular'));
  });

  it('Should be able filled card data', () => {
    const { getByTestId, getByText } = render(
      <Card
        cvv="1234"
        number="9999999999999999"
        name="André V R Coelho"
        expirate="99/99"
      />,
    );

    expect(getByTestId('cvv')).toContainElement(getByText('1234'));
    expect(getByTestId('number')).toContainElement(
      getByText('9999 9999 9999 9999'),
    );
    expect(getByTestId('name')).toContainElement(getByText('André V R Coelho'));
    expect(getByTestId('expirate')).toContainElement(getByText('99/99'));
  });

  it('Should be able change background', () => {
    const { getByTestId } = render(
      <Card cvv="" number="" name="" expirate="" backgroundColor="#000" />,
    );

    expect(getByTestId('card-front')).toHaveStyle('background-color: #000');
  });

  it('Should be able change filled background', () => {
    const { getByTestId } = render(
      <Card
        cvv="123"
        number="9999 9999 9999 9999 9999"
        name="Tester"
        expirate="99/99"
        filledBackgroundColor="#000"
      />,
    );

    expect(getByTestId('card-front')).toHaveStyle('background-color: #000');
    expect(getByTestId('card-back')).toHaveStyle('background-color: #000');
  });

  it('Should be able flip card', () => {
    const { getByTestId } = render(
      <Card cvv="" number="" name="" expirate="" flipCard />,
    );

    expect(getByTestId('card')).toHaveClass('active');
  });

  it('Should be able don´t flip card', () => {
    const { getByTestId } = render(
      <Card cvv="" number="" name="" expirate="" />,
    );

    expect(getByTestId('card')).not.toHaveClass('active');
  });
});
