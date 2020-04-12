# React Credit Card with Flip

Credit card with flip to ReactJS

## Install

```sh
   npm install react-credit-card-with-flip
```

ou

```sh
yarn add react-credit-card-with-flip
```

## Usage

```diff
import React, { useState } from 'react';
import Card from 'react-credit-card-with-flip';

export default function PaymentForm() {
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');
  const [cardCVV, setCardCVV] = useState('');
  const [focusCVV, setFocusCVV] = useState(false);

  render() {
    return (
      <div id="form">
        <Card
          number={cardNumber}
          name={cardName}
          expiry={cardExpiry}
          cvv={cardCVV}
          flipCard={focusCVV}
        />
        <form>
          <input
            type="tel"
            name="number"
            placeholder="Card Number"
            onChange={event => setCardNumber(event.target.value)}
          />
          ...
          <input
            type="tel"
            name="cvv"
            placeholder="CVV"
            onChange={event => setCardCVV(event.target.value)}
            onFocus={() => setFocusCVV(true)}
            onBlur={() => setFocusCVV(false)}
          />
        </form>
      </div>
    );
  }
}
```

## Props

- `name` {string}: Cardholder Name - required
- `number` {string|number}: Card number - required
- `expiry` {string}: Card expiry date `01/20` - required
- `cvv` {string|number}: Card CVC/CVV - required
- `brand` {string}: Card brand `URL` - optional
- `backgroundColor` {string}: Card background color when are empty. `Default: '#DDD'` - optional
- `filledBackgroundColor` {string}: Card background color when aren´t empty. `Default: '#134869'` - optional
- `flipCard` {boolean} Flip card when focus or blur CVV input - optional
- `emptyName` {string} Default value when name is empty. `Default: Cardholder Name` - optional

## LICENSE

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

Development by: [André Coelho](https://github.com/avrcoelho)
