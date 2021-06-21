import currencies, { ICurrency } from './currencies';

const icons = {
  send:
    "data:image/svg+xml,%3Csvg width='23' height='20' viewBox='0 0 23 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M13.6365 5.25219L8.77064 0.372018L8.7679 0.369278C8.4114 0.0144889 7.87019 -0.102463 7.39083 0.0971426C6.91069 0.296061 6.61133 0.762276 6.61133 1.26553V2.69167C2.86556 3.3 0 6.56243 0 10.4821C0 11.4041 0.157463 12.3087 0.470555 13.1683C0.65125 13.6644 1.12294 14.0003 1.6582 14.0003L1.6607 14.0003C1.89197 13.9997 2.11524 13.9359 2.30787 13.8205L2.31131 13.8184C2.55047 13.6738 2.74467 13.4479 2.84691 13.1671L2.84812 13.1637C3.10338 12.4546 3.50039 11.8234 4 11.2975V18.3335C4 19.2539 4.75448 20.0001 5.68517 20.0001L19.6721 20.0001C20.6028 20.0001 21.3573 19.2539 21.3573 18.3335V16.6601C21.3573 16.5703 21.2796 16.5001 21.1888 16.5001H16.3018C15.1849 16.5001 14.2796 15.6047 14.2796 14.5001V11.5001C14.2796 10.3956 15.1849 9.50012 16.3018 9.50012H21.1888C21.2796 9.50012 21.3573 9.42996 21.3573 9.34011V7.66679C21.3573 6.74632 20.6028 6.00012 19.6721 6.00012H13.9922C13.9604 5.71465 13.8326 5.45193 13.6365 5.25219ZM7.61133 1.26553C7.61133 1.15835 7.6748 1.06155 7.77441 1.02065C7.87305 0.979209 7.98633 1.00228 8.0625 1.07809L12.9229 5.95272C12.9717 6.00246 13 6.06972 13 6.14016C13 6.21053 12.9717 6.27785 12.9229 6.3276L8.0625 11.1996C7.98633 11.2755 7.87305 11.2982 7.77441 11.2571C7.6748 11.2162 7.61133 11.1193 7.61133 11.0122V8.63198C7.27206 8.64622 6.93786 8.6877 6.61133 8.75459C4.73019 9.13999 3.1032 10.3691 2.22344 12.0945C2.20469 12.1312 2.18628 12.1682 2.16822 12.2055C2.10315 12.3395 2.04253 12.4765 1.98662 12.6161C1.959 12.6851 1.93253 12.7547 1.90723 12.825C1.88574 12.8841 1.84473 12.932 1.79395 12.9627C1.75391 12.9867 1.70703 13.0001 1.6582 13.0003C1.54688 13.0003 1.44824 12.9306 1.41016 12.8261C1.38532 12.7579 1.3616 12.6893 1.339 12.6205L1.33815 12.6179C1.28822 12.4655 1.24379 12.3116 1.20487 12.1563C1.19106 12.1012 1.17794 12.0459 1.16552 11.9905C1.05542 11.4989 1 10.9943 1 10.4821C1 6.77071 3.94238 3.73507 7.61133 3.59499V1.26553ZM21.1889 10.5001C21.7473 10.5001 22.2 10.9479 22.2 11.5001V14.5001C22.2 15.0524 21.7473 15.5001 21.1889 15.5001H16.3019C15.7435 15.5001 15.2908 15.0524 15.2908 14.5001V11.5001C15.2908 10.9479 15.7435 10.5001 16.3019 10.5001H21.1889ZM17.8186 14.0001C17.2601 14.0001 16.8074 13.5524 16.8074 13.0001C16.8074 12.4479 17.2601 12.0001 17.8186 12.0001C18.377 12.0001 18.8297 12.4479 18.8297 13.0001C18.8297 13.5524 18.377 14.0001 17.8186 14.0001Z' fill='white'/%3E%3C/svg%3E%0A",
  selectAddress:
    "data:image/svg+xml,%3Csvg width='19' height='14' viewBox='0 0 19 14' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.68517 14C0.754478 14 0 13.2538 0 12.3333V1.66667C0 0.746192 0.754478 0 1.68517 0H15.6721C16.6028 0 17.3573 0.746193 17.3573 1.66667V3.33999C17.3573 3.42984 17.2796 3.5 17.1888 3.5L12.3018 3.5C11.1849 3.5 10.2796 4.39543 10.2796 5.5V8.5C10.2796 9.60457 11.1849 10.5 12.3018 10.5H17.1888C17.2796 10.5 17.3573 10.5702 17.3573 10.66V12.3333C17.3573 13.2538 16.6028 14 15.6721 14L1.68517 14Z' fill='white'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M17.1889 4.50002C17.7473 4.50002 18.2 4.94773 18.2 5.50002V8.50002C18.2 9.05231 17.7473 9.50002 17.1889 9.50002H12.3019C11.7435 9.50002 11.2908 9.05231 11.2908 8.50002V5.50002C11.2908 4.94773 11.7435 4.50002 12.3019 4.50002H17.1889ZM13.8185 8.00002C13.2601 8.00002 12.8074 7.5523 12.8074 7.00002C12.8074 6.44773 13.2601 6.00002 13.8185 6.00002C14.377 6.00002 14.8297 6.44773 14.8297 7.00002C14.8297 7.5523 14.377 8.00002 13.8185 8.00002Z' fill='white'/%3E%3C/svg%3E%0A",
  tooltipArrow:
    "data:image/svg+xml,%3Csvg width='14' height='7' viewBox='0 0 14 7' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M-77.5 11C-77.5 8.51472 -75.4853 6.5 -73 6.5H0.17157C0.83461 6.5 1.4705 6.23661 1.93934 5.76777L5.93934 1.76777C6.52513 1.18198 7.47488 1.18198 8.06066 1.76777L12.0607 5.76777C12.5295 6.23661 13.1654 6.5 13.8284 6.5H87C89.4853 6.5 91.5 8.51472 91.5 11V35C91.5 37.4853 89.4853 39.5 87 39.5H-73C-75.4853 39.5 -77.5 37.4853 -77.5 35V11Z' fill='white' stroke='%23EAEAEA'/%3E%3C/svg%3E%0A",
};

interface IParams {
  buttonId: string;
  inputId: string;
  size?: 'small' | 'large';
  currency?: string;
  isRound?: boolean;
  withTooltip?: boolean;
}

interface ISendButtonParams {
  buttonId: string;
  size: 'small' | 'large';
  readOnly?: boolean;
  currency?: string;
  amount?: number;
  recipientAddress?: string;
  chain?: string;
  extraId?: string;
}

declare global {
  interface Window {
    shCurrencies?: ICurrency[] | undefined;
  }
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

addCustomEventListener('#sh-button', 'mouseover', () => {
  const element = <HTMLDivElement>document.getElementById('sh-button');
  const tooltip = <HTMLDivElement>document.getElementById('sh-tooltip');

  element.style.backgroundColor = '#31A76C';
  element.style.cursor = 'pointer';

  if (tooltip) {
    tooltip.style.opacity = '1';
  }
});

addCustomEventListener('#sh-button', 'mouseleave', () => {
  const element = <HTMLDivElement>document.getElementById('sh-button');
  const tooltip = <HTMLDivElement>document.getElementById('sh-tooltip');

  element.style.backgroundColor = '#3FBB7D';
  element.style.cursor = 'default';

  if (tooltip) {
    tooltip.style.opacity = '0';
  }
});

addCustomEventListener('#sh-send-button', 'mouseover', () => {
  const element = <HTMLDivElement>document.getElementById('sh-send-button');

  element.style.backgroundColor = '#31A76C';
  element.style.cursor = 'pointer';
});

addCustomEventListener('#sh-send-button', 'mouseleave', () => {
  const element = <HTMLDivElement>document.getElementById('sh-send-button');

  element.style.backgroundColor = '#3FBB7D';
  element.style.cursor = 'default';
});

const createButton = (size?: 'small' | 'large', isRound?: boolean): HTMLDivElement => {
  const findExist = document.getElementById('sh-button');

  if (findExist) {
    findExist.remove();
  }

  const button = <HTMLDivElement>document.createElement('div');
  button.id = 'sh-button';

  button.style.width = size === 'large' ? '130px' : '34px';
  button.style.height = '34px';
  button.style.backgroundColor = '#3FBB7D';
  button.style.borderRadius = size !== 'large' && isRound ? '17px' : '6px';
  button.style.display = 'flex';
  button.style.flexDirection = 'row';
  button.style.alignItems = 'center';
  button.style.justifyContent = size === 'large' ? 'flexStart' : 'center';
  button.style.position = 'relative';

  if (isRound) {
    button.setAttribute('sh-button-format', 'round');
  }

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
  label.style.fontSize = '13px';
  label.style.lineHeight = '15px';
  label.style.color = '#FFFFFF';
  label.style.fontFamily = 'Roboto';
  label.style.margin = '0 0 0 12px';

  return label;
};

const createLogo = (size?: 'small' | 'large'): HTMLImageElement | HTMLDivElement => {
  const findExist = document.getElementById('sh-logo');

  if (findExist) {
    findExist.remove();
  }

  const logo = <HTMLImageElement>document.createElement('img');

  logo.id = 'sh-logo';

  logo.src = icons.selectAddress;

  logo.style.width = '18.2px';
  logo.style.height = '14px';

  if (size === 'large') {
    const logoRow = <HTMLDivElement>document.createElement('div');

    logoRow.style.width = '46px';
    logoRow.style.height = '46px';
    logoRow.style.position = 'absolute';
    logoRow.style.right = '-5px';
    logoRow.style.borderRadius = '23px';
    logoRow.style.background = 'rgba(255, 255, 255, 0.2)';
    logoRow.style.display = 'flex';
    logoRow.style.alignItems = 'center';

    logo.style.margin = '0 0 0 13px';

    logoRow.appendChild(logo);

    return logoRow;
  }

  return logo;
};

const createCurrencyLogo = (logo: string, background: string): HTMLDivElement => {
  const currencyLogoRow = <HTMLDivElement>document.createElement('div');
  currencyLogoRow.id = 'sh-currency-logo';

  const currencyLogo = <HTMLImageElement>document.createElement('img');
  currencyLogo.src = logo;

  const getButton = <HTMLDivElement>document.getElementById('sh-button');

  const isButtonRound = getButton.getAttribute('sh-button-format') === 'round';

  currencyLogo.style.width = '10px';
  currencyLogo.style.height = '10px';

  currencyLogoRow.style.width = isButtonRound ? '20px' : '16px';
  currencyLogoRow.style.height = isButtonRound ? '20px' : '16px';
  currencyLogoRow.style.border = '1px solid #FFFFFF';
  currencyLogoRow.style.borderRadius = isButtonRound ? '10px' : '9px';
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

const getTooltipArrow = (): HTMLImageElement => {
  const arrow = <HTMLImageElement>document.createElement('img');

  arrow.src = icons.tooltipArrow;

  arrow.style.width = '14px';
  arrow.style.height = '7px';
  arrow.style.position = 'absolute';
  arrow.style.top = '-7px';
  arrow.style.margin = '0 auto 0 auto';
  arrow.style.left = '0';
  arrow.style.right = '0';

  return arrow;
};

const createTooltip = (): HTMLDivElement => {
  const tooltip = <HTMLDivElement>document.createElement('div');
  tooltip.id = 'sh-tooltip';

  tooltip.style.position = 'absolute';
  tooltip.style.padding = '8px 16px';
  tooltip.style.backgroundColor = '#FFFFFF';
  tooltip.style.border = '1px solid #EAEAEA';
  tooltip.style.boxShadow = '0px 1px 15px rgb(29 29 34 / 10%)';
  tooltip.style.borderRadius = '5px';
  tooltip.style.top = '45px';
  tooltip.style.transition = 'all 0.3s';
  tooltip.style.opacity = '0';

  const tooltipText = <HTMLSpanElement>document.createElement('span');

  tooltipText.innerText = 'Enter with SimpleHold';

  tooltipText.style.whiteSpace = 'nowrap';
  tooltipText.style.fontSize = '14px';
  tooltipText.style.lineHeight = 'now16pxrap';
  tooltipText.style.color = '#7D7E8D';

  const arrow = getTooltipArrow();

  tooltip.appendChild(arrow);
  tooltip.appendChild(tooltipText);

  return tooltip;
};

export const init = (params: IParams): void => {
  if (document.documentElement.getAttribute('sh-ex-status') === 'installed') {
    const { buttonId, inputId, size, isRound, withTooltip } = params;

    const getButton = <HTMLDivElement>document.getElementById(buttonId);
    const getInput = <HTMLInputElement>document.getElementById(inputId);

    if (getButton && getInput) {
      const button = createButton(size, isRound);
      const logo = createLogo(size);

      button.appendChild(logo);

      if (withTooltip && size !== 'large') {
        const tooltip = createTooltip();
        button.appendChild(tooltip);
      }

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
  const currencies = getCurrencies();

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
  return window?.shCurrencies || currencies;
};

const getSendButton = (
  type: 'send' | 'selectAddress',
  size: 'large' | 'small',
  buttonId: string
) => {
  const findExist = document.getElementById(buttonId);

  if (findExist) {
    findExist.remove();
  }

  const button = <HTMLDivElement>document.createElement('div');
  button.id = buttonId;

  button.style.width = size === 'large' ? '192px' : '34px';
  button.style.height = '34px';
  button.style.backgroundColor = '#3FBB7D';
  button.style.borderRadius = '6px';

  if (size === 'large') {
    button.style.position = 'relative';
    button.style.overflow = 'hidden';
    button.style.display = 'flex';
    button.style.alignItems = 'center';
  }

  return button;
};

const getSendLogo = (size: 'small' | 'large'): HTMLImageElement => {
  const logo = <HTMLImageElement>document.createElement('img');

  logo.id = 'sh-send-logo';

  logo.src = icons.send;

  logo.style.width = '22.2px';
  logo.style.height = '20px';
  logo.style.margin = size === 'small' ? '4px 0 0 4px' : '10px 0 0 10px';

  return logo;
};

const getSendLabelRow = (): HTMLDivElement => {
  const sendLabelRow = <HTMLDivElement>document.createElement('div');

  sendLabelRow.style.display = 'flex';
  sendLabelRow.style.flexDirection = 'row';
  sendLabelRow.style.alignItems = 'center';
  sendLabelRow.style.margin = '0 0 0 14px';

  return sendLabelRow;
};

const getSendLabel = (): HTMLSpanElement => {
  const sendLabel = <HTMLSpanElement>document.createElement('span');

  sendLabel.innerText = 'Send with';

  sendLabel.style.fontWeight = '500';
  sendLabel.style.fontSize = '13px';
  sendLabel.style.lineHeight = '15px';
  sendLabel.style.color = '#FFFFFF';
  sendLabel.style.fontFamily = 'Roboto';

  return sendLabel;
};

const getSendShLabel = (): HTMLSpanElement => {
  const sendShLabel = <HTMLSpanElement>document.createElement('span');

  sendShLabel.innerText = 'SimpleHold';

  sendShLabel.style.margin = '0 0 0 2px';
  sendShLabel.style.fontWeight = 'bold';
  sendShLabel.style.fontSize = '13px';
  sendShLabel.style.lineHeight = '15px';
  sendShLabel.style.color = '#FFFFFF';
  sendShLabel.style.fontFamily = 'Roboto';

  return sendShLabel;
};

const getSendLogoRow = (): HTMLDivElement => {
  const sendLogoRow = <HTMLDivElement>document.createElement('span');

  sendLogoRow.style.width = '46px';
  sendLogoRow.style.height = '46px';
  sendLogoRow.style.borderRadius = '23px';
  sendLogoRow.style.position = 'absolute';
  sendLogoRow.style.right = '-5px';
  sendLogoRow.style.background = 'rgba(255, 255, 255, 0.2)';

  return sendLogoRow;
};

export const createSendButton = (params: ISendButtonParams): void => {
  if (document.documentElement.getAttribute('sh-ex-status') === 'installed') {
    const {
      buttonId,
      size = 'small',
      readOnly = false,
      currency = undefined,
      amount = undefined,
      recipientAddress = undefined,
      chain = undefined,
      extraId = undefined,
    } = params;

    const getButton = <HTMLDivElement>document.getElementById(buttonId);

    if (getButton) {
      const button = getSendButton('send', size, 'sh-send-button');

      if (size === 'large') {
        const labelRow = getSendLabelRow();
        const sendLabel = getSendLabel();
        const simpleHoldLabel = getSendShLabel();

        labelRow.appendChild(sendLabel);
        labelRow.appendChild(simpleHoldLabel);

        const logoRow = getSendLogoRow();
        const logo = getSendLogo(size);

        logoRow.appendChild(logo);

        button.appendChild(labelRow);
        button.appendChild(logoRow);
      } else {
        const logo = getSendLogo(size);
        button.appendChild(logo);
      }

      if (readOnly) {
        button.setAttribute('sh-read-only', `${readOnly}`);
      }

      if (currency) {
        button.setAttribute('sh-currency', currency);
      }

      if (amount) {
        button.setAttribute('sh-amount', `${amount}`);
      }

      if (recipientAddress) {
        button.setAttribute('sh-recipient-address', recipientAddress);
      }

      if (chain) {
        button.setAttribute('sh-chain', chain);
      }

      if (extraId) {
        button.setAttribute('sh-extra-id', extraId);
      }

      document.getElementById(buttonId)?.replaceWith(button);
    }
  }
};
