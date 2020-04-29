# React Credit Card Flipping

Credit card flipping for ReactJS

![Demo](demo.gif)

## Install

```shell
   npm install react-credit-card-flipping
```

ou

```shell
yarn add react-credit-card-flipping
```

## Usage

```js
import React, { useState } from 'react';
import Card from 'react-credit-card-flipping';

export default function App() {
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [cardBrand, setCardBrand] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');
  const [cardCVV, setCardCVV] = useState('');
  const [focusCVV, setFocusCVV] = useState(false);

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
          onChange={(event) => setCardNumber(event.target.value)}
        />
        ...
        <input
          type="tel"
          name="cvv"
          placeholder="CVV"
          onChange={(event) => setCardCVV(event.target.value)}
          onFocus={() => setFocusCVV(true)}
          onBlur={() => setFocusCVV(false)}
        />
      </form>
    </div>
  );
}
```

## Props

| property              | propType         | required | default         | description                                        |
|-----------------------|------------------|----------|-----------------|----------------------------------------------------|
| name                  | string           | yes      |                 | Cardholder Name                                    |
| number                | string \| number | yes      |                 | Card number                                        |
| expiry                | string           | yes      |                 | Card expiry date 00/00                             |
| cvv                   | string \| number | yes      |                 | Card CVC/CVV                                       |
| brand                 | string           | yes      |                 | Card brand URL                                     |
| backgroundColor       | string           | \-       | \#DDD           | Card background color when empty                   |
| filledBackgroundColor | string           | \-       | \#134869        | Card background color when not empty               |
| flipCard              | boolean          | \-       | false           | Flip card when there\`s focus or blur on CVV input |
| emptyName             | string           | \-       | Cardholder Name |  Default value when name is empty                  |


## LICENSE

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

Development by: [André Coelho](https://github.com/avrcoelho)
