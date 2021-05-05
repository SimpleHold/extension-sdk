import currencies, { ICurrency } from './currencies';

export interface IParams {
  buttonId: string;
  inputId: string;
  size?: 'small' | 'big';
  currency?: string;
}

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const toLower = (text?: string): string | undefined => {
  if (text?.length) {
    return text.toLowerCase();
  }
  return text;
};

export const isInstalled = async (): Promise<boolean> => {
  await delay(500);

  return document.documentElement.getAttribute('sh-ex-status') === 'installed';
};

const createButton = (size?: 'small' | 'big'): HTMLDivElement => {
  const button = <HTMLDivElement>document.createElement('div');
  button.id = 'sh-button';

  button.style.width = size === 'big' ? '106px' : '30px';
  button.style.height = '30px';
  button.style.backgroundColor = '#3FBB7D';
  button.style.borderRadius = '5px';
  button.style.display = 'flex';
  button.style.flexDirection = 'row';
  button.style.alignItems = 'center';
  button.style.justifyContent = 'center';
  button.style.position = 'relative';

  return button;
};

const createButtonLabel = (): HTMLSpanElement => {
  const label = <HTMLSpanElement>document.createElement('span');

  label.innerText = 'SimpleHold';

  label.style.fontWeight = 'bold';
  label.style.fontSize = '12px';
  label.style.lineHeight = '14px';
  label.style.textAlign = 'center';
  label.style.color = '#FFFFFF';
  label.style.fontFamily = 'Roboto';
  label.style.margin = '0 0 0 5px';

  return label;
};

const createLogo = (): HTMLImageElement => {
  const logo = <HTMLImageElement>document.createElement('img');

  logo.src =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWCAYAAAA8AXHiAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAUsSURBVHgB7d2PURs5FMfxZ+YKyFVwooKECs6uIKQDU0FCBQcV3KUCnAqOVICvgjgVRNcBHTh6rCAmsWXt2m8Xab+fGY1hdj3Dnx+S2F09iQAAAAAAAAAAAAAAAACjM8k5ab1eT8PL29D01YX2SlCb+9BWofnQPk0mk6UcIBmsEKj34eWDNGHCuPjQrkPAFtLB1mCFQLnwciNND4Vx86HNQsB8mzf9EqwQqjfh5U4Y7vCDDpMXIVy3uW94FixChT3e5YbrKVhx+NNQOQG2057rLGdYPNn4WOdUToDddCS7yTnxIViht5oLE3Xkmca8JD0MheHEb0JvhXw+DIenqRNO4oTdCZDPxYvmO+lQeC5Ae8ncaLD+FKC9ZG40WE6A9lzq4CSMlWsBOggT+J33mk8EMECwYIJgwQTBggmCBRMECyYIFkwQLJggWDBBsGCCYMEEwYIJggUTBAsmCBZMECx09TF18DfB0JahfZZY6aVtjYSXimANQ1cU61/8PyFI91IhgtW/RWiXtQbqEcHqjwbpsmu9qdIQrH5oqLTG1EpGgv8K7Y0uVIpg2bscW6gUwbK1GMuc6mcsWLXjpWXtzlig5Y2Uw++qrszk3c51bqhideorKbBEZ/javTTX455diafHsnO6L1iVVaf2stFDM8eyscgIlfZOWvN1KnVwod3F74tgGfmccc7fUl+lHyexRilDoY3kMBiHwG9Srxk91vHdZ0zaP0jdzgnW8eVcDH0tdXtLsIbhpG6OYA3DSeUIFkwQLJggWDDBvcKyLUP7Ks3tFL3i7aSpv+5kYASrTEtpbnIvtx2M25EMupsbQ2F5NFCz1GbgeixuovRJBkKwyqKhuso9OZw7l6Z36x3BKodvE6oN76R57r5XBKscF9JBXL/4UXpGsMrgU3OqDAvpGcEqw1c5QHzaotfhkGCVwcvhvPSIYI0HPRZ+4eRwvS4rI1hlOGh75fgodK9LywhWGV7t2zV+j/fSM4JVjr+kg9hbnUvPCFY5piEkXcI1yDIzglWWq9xw6cLR0PQJh957K0WwyqPhuolD3FZxPvYltLkMhAWrx6ePrMxSJxzxZ76UZrnZ//HzP6TpoZwMjAf9yjaVF1r7gaEQJggWTBAsmCBYw/BSOYJ1fDn35KrelSJYEazjcxnn5BRmK9mK61g2fk/tlROrI3+Rep3SY9lI3kaJGwr0vsChJw/1VwmWjZznp66kvkm8D+1aPyBYNs4fqwfvEodKvfVTy3Yo+n1QjtuYhmpvnVH9JYR2Js2aQS9l0j8QXaF9tll7lcm7Hf2Bn7bZ8DI+leCkHKtdG1ARLFu6FciljBDBsjcP4Rqs6stQCJY9NsKECZ3I/xsvio4GweqHk2YDo7mMBMHqj/ZcN/ueV68Fc6xhePlRR9RLhQjW8JbSPO2gk3tfS9AIFrpKXqMjWOgsBGuy6xiTd5ggWDBBsGCCYMEEwYIJggUTBAsmCBZMECyYIFgwQbBggmDBBMGCCYIFEwQLJjRYXoD2kiu8CRa6Sq6T1GD9J0B7ye2ENVhLAdq7TR18eGZ5vV7fyQvd4QAvkq4mOk2d8Phf4bUA+fbm5WmVBb0WMu3trdTmdSytKld7/XEc5rG85V5PwYorcGdCuLDbRe5K7WdX3mMNJ8KFn2keNFS3uW/YupI1VkPROZcTjJ12NhdtC8dtvVcYq/nqBK3kar44zGY15NbVCCc5J8VqvrrbwuvQtDJdzkZEKIsGyUtzJ+Y2hGkpAAAAAAAAAAAAAAAAANr4DvKSaZ5kZbWuAAAAAElFTkSuQmCC';

  logo.style.width = '18px';
  logo.style.height = '18px';

  return logo;
};

const createCurrencyLogo = (logo: string, background: string): HTMLDivElement => {
  const currencyLogoRow = <HTMLDivElement>document.createElement('div');
  currencyLogoRow.id = 'sh-currency-logo';

  const currencyLogo = <HTMLImageElement>document.createElement('img');
  currencyLogo.src = logo;

  currencyLogo.style.width = '10px';
  currencyLogo.style.height = '10px';

  currencyLogoRow.style.width = '16px';
  currencyLogoRow.style.height = '16px';
  currencyLogoRow.style.border = '1px solid #FFFFFF';
  currencyLogoRow.style.borderRadius = '9px';
  currencyLogoRow.style.position = 'absolute';
  currencyLogoRow.style.top = '-6px';
  currencyLogoRow.style.right = '-6px';
  currencyLogoRow.style.background = `linear-gradient(135deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 100%), ${background}`;
  currencyLogoRow.style.display = 'flex';
  currencyLogoRow.style.alignItems = 'center';
  currencyLogoRow.style.justifyContent = 'center';

  currencyLogoRow.appendChild(currencyLogo);

  return currencyLogoRow;
};

export const init = (params: IParams): void => {
  if (isInstalled()) {
    const { buttonId, inputId, size } = params;

    const getButton = <HTMLDivElement>document.getElementById(buttonId);
    const getInput = <HTMLInputElement>document.getElementById(inputId);

    if (getButton && getInput) {
      const button = createButton(size);
      const logo = createLogo();

      button.appendChild(logo);

      if (size === 'big') {
        const buttonLabel = createButtonLabel();
        button.appendChild(buttonLabel);
      }

      getInput.setAttribute('sh-input', 'address');
      document.getElementById(buttonId)?.replaceWith(button);
    }
  }
};

export const setCurrency = (symbol: string, chain?: 'eth' | 'bsc'): void => {
  const checkExist = currencies.find((currency: ICurrency) => {
    const findBySymbol = toLower(currency.symbol) === toLower(symbol);

    if (chain?.length) {
      return findBySymbol && toLower(currency.chain) === toLower(chain);
    }

    return findBySymbol;
  });

  if (checkExist) {
    const { logo, background, chain: existChain } = checkExist;
    const findButton: HTMLElement | null = document.getElementById('sh-button');

    if (findButton) {
      findButton.removeAttribute('sh-currency-chain');

      const findCurrencyLogo: HTMLElement | null = document.getElementById('sh-currency-logo');

      if (findCurrencyLogo) {
        findCurrencyLogo.remove();
      }

      const currencyLogo = createCurrencyLogo(logo, background);
      findButton.appendChild(currencyLogo);
      findButton.setAttribute('sh-currency', symbol);

      if (existChain) {
        findButton.setAttribute('sh-currency-chain', existChain);
      }
    }
  } else {
    new Error('Currency was not found');
  }
};

export const removeCurrency = (): void => {
  const findButton: HTMLElement | null = document.getElementById('sh-button');
  const findCurrencyLogo: HTMLElement | null = document.getElementById('sh-currency-logo');

  if (findButton && findCurrencyLogo) {
    findButton.removeAttribute('sh-currency');
    findButton.removeAttribute('sh-currency-chain');
    findCurrencyLogo.remove();
  }
};

export const getCurrencies = (): ICurrency[] => {
  return currencies;
};
