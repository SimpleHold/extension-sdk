import currencies, { ICurrency } from './currencies';

export interface IParams {
  buttonId: string;
  inputId: string;
  size?: 'small' | 'large';
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

const addCustomEventListener = (selector: string, event: any, handler: any) => {
  const rootElement = document.querySelector<HTMLBodyElement>('body');
  if (rootElement) {
    rootElement.addEventListener(
      event,
      (evt) => {
        let targetElement = evt.target;

        while (targetElement != null) {
          if (targetElement.matches(selector)) {
            handler(evt);
            return;
          }
          targetElement = targetElement.parentElement;
        }
      },
      true
    );
  }
};

addCustomEventListener('#sh-button', 'mouseenter', () => {
  const element = <HTMLDivElement>document.getElementById('sh-button');

  element.style.backgroundColor = '#31A76C';
  element.style.cursor = 'pointer';
});

addCustomEventListener('#sh-button', 'mouseleave', () => {
  const element = <HTMLDivElement>document.getElementById('sh-button');

  element.style.backgroundColor = '#3FBB7D';
  element.style.cursor = 'default';
});

const createButton = (size?: 'small' | 'large'): HTMLDivElement => {
  const findExist = document.getElementById('sh-button');

  if (findExist) {
    findExist.remove();
  }

  const button = <HTMLDivElement>document.createElement('div');
  button.id = 'sh-button';

  button.style.width = size === 'large' ? '100px' : '32px';
  button.style.height = '32px';
  button.style.backgroundColor = '#3FBB7D';
  button.style.borderRadius = '6px';
  button.style.display = 'flex';
  button.style.flexDirection = 'row';
  button.style.alignItems = 'center';
  button.style.justifyContent = 'center';
  button.style.position = 'relative';

  return button;
};

const createButtonLabel = (): HTMLSpanElement => {
  const findExist = document.getElementById('sh-label');

  if (findExist) {
    findExist.remove();
  }

  const label = <HTMLSpanElement>document.createElement('span');

  label.innerText = 'SimpleHold';
  label.id = 'sh-label';

  label.style.fontWeight = 'bold';
  label.style.fontSize = '11px';
  label.style.lineHeight = '13px';
  label.style.textAlign = 'center';
  label.style.color = '#FFFFFF';
  label.style.fontFamily = 'Roboto';
  label.style.margin = '0 0 0 5.5px';

  return label;
};

const createLogo = (): HTMLImageElement => {
  const findExist = document.getElementById('sh-logo');

  if (findExist) {
    findExist.remove();
  }

  const logo = <HTMLImageElement>document.createElement('img');

  logo.id = 'sh-logo';

  logo.src =
    "data:image/svg+xml,%3Csvg width='16' height='12' viewBox='0 0 16 12' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.44443 12C0.646695 12 0 11.3604 0 10.5714V1.42857C0 0.639593 0.646696 0 1.44443 0H13.4332C14.231 0 14.8777 0.639594 14.8777 1.42857V2.86285C14.8777 2.93986 14.8111 3 14.7332 3L10.5444 3C9.58709 3 8.81105 3.76751 8.81105 4.71429V7.28571C8.81105 8.23249 9.58709 9 10.5444 9H14.7332C14.8111 9 14.8777 9.06014 14.8777 9.13715V10.5714C14.8777 11.3604 14.231 12 13.4332 12L1.44443 12Z' fill='white'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M14.7333 3.85716C15.212 3.85716 15.6 4.24092 15.6 4.7143V7.28573C15.6 7.75912 15.212 8.14287 14.7333 8.14287H10.5445C10.0658 8.14287 9.67782 7.75912 9.67782 7.28573V4.7143C9.67782 4.24092 10.0658 3.85716 10.5445 3.85716H14.7333ZM11.8445 6.85716C11.3658 6.85716 10.9778 6.4734 10.9778 6.00002C10.9778 5.52663 11.3658 5.14287 11.8445 5.14287C12.3231 5.14287 12.7111 5.52663 12.7111 6.00002C12.7111 6.4734 12.3231 6.85716 11.8445 6.85716Z' fill='white'/%3E%3C/svg%3E%0A";

  logo.style.width = '16px';
  logo.style.height = '12px';

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

      if (size === 'large') {
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

  const findCurrencyLogo: HTMLElement | null = document.getElementById('sh-currency-logo');

  if (findCurrencyLogo) {
    findCurrencyLogo.remove();
  }

  if (checkExist) {
    const { logo, background, chain: existChain } = checkExist;
    const findButton: HTMLElement | null = document.getElementById('sh-button');

    if (findButton) {
      findButton.removeAttribute('sh-currency-chain');

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
