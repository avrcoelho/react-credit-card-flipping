# React Credit Card With Flip

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

```
import React, { useState } from 'react';
import Card from 'react-credit-card-with-flip';

export default function PaymentForm {
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
