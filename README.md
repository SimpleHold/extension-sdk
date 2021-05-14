# simplehold

### SDK for SimpleHold Extension Wallet

## Go to

- [Install](#install)
- [Check is installed](#check-is-installed)
- [Init](#init)
- [Example](#example)
- [Get supported currencies](#get-supported-currencies)
- [Set currency](#set-currency)
- [Remove currency](#remove-currency)

## Install

yarn:

```
yarn add simplehold
```

npm:

```
npm install simplehold
```

## Check is installed

```
const isInstalled = await SimpleHoldSDK.isInstalled()
```

## Init

This method will draw a button on the site that the user can click to select the address

```
SimpleHoldSDK.init({
  buttonId: 'my-button',
  inputId: 'my-input',
  size: 'small', // small or large
});
```

## Example

The example below was written for react app

```
import * as React from 'react'
import * as SimpleHoldSDK from 'simplehold'

const Example: React.FC = () => {
  const [address, setAddress] = React.useState<string>('')

  React.useEffect(() => {
    document.addEventListener(
      'sh-select-address',
      (data) => {
        const {
          detail: { address },
        } = data

        setAddress(address)
      },
      false
    )

    return () => {
      document.removeEventListener(
        'sh-select-address',
        (data) => {
          const {
            detail: { address },
          } = data

          setAddress(address)
        },
        false
      )
    }
  }, [])

  return (
    <div>
      <div id="my-button" />
      <input
        id="my-input"
        value={address}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAddress(e.target.value)}
      />
    </div>
  )
}

export default Example
```

## Get supported currencies

```
const currencies = SimpleHoldSDK.getCurrencies()
```

#### Currency data:

```
{
	symbol: string;
	background: string;
	type: 'currency' | 'token';
	chain?: 'eth' | 'bsc';
	logo: string;
}
```

## Set currency

```
SimpleHoldSDK.setCurrency(currency, chain);
```

## Remove currency

```
SimpleHoldSDK.removeCurrency();
```
