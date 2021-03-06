"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSendButton = exports.getCurrencies = exports.removeCurrency = exports.setCurrency = exports.init = exports.isInstalled = void 0;
const currencies_1 = __importDefault(require("./currencies"));
const icons = {
    send: "data:image/svg+xml,%3Csvg width='23' height='20' viewBox='0 0 23 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M13.6365 5.25219L8.77064 0.372018L8.7679 0.369278C8.4114 0.0144889 7.87019 -0.102463 7.39083 0.0971426C6.91069 0.296061 6.61133 0.762276 6.61133 1.26553V2.69167C2.86556 3.3 0 6.56243 0 10.4821C0 11.4041 0.157463 12.3087 0.470555 13.1683C0.65125 13.6644 1.12294 14.0003 1.6582 14.0003L1.6607 14.0003C1.89197 13.9997 2.11524 13.9359 2.30787 13.8205L2.31131 13.8184C2.55047 13.6738 2.74467 13.4479 2.84691 13.1671L2.84812 13.1637C3.10338 12.4546 3.50039 11.8234 4 11.2975V18.3335C4 19.2539 4.75448 20.0001 5.68517 20.0001L19.6721 20.0001C20.6028 20.0001 21.3573 19.2539 21.3573 18.3335V16.6601C21.3573 16.5703 21.2796 16.5001 21.1888 16.5001H16.3018C15.1849 16.5001 14.2796 15.6047 14.2796 14.5001V11.5001C14.2796 10.3956 15.1849 9.50012 16.3018 9.50012H21.1888C21.2796 9.50012 21.3573 9.42996 21.3573 9.34011V7.66679C21.3573 6.74632 20.6028 6.00012 19.6721 6.00012H13.9922C13.9604 5.71465 13.8326 5.45193 13.6365 5.25219ZM7.61133 1.26553C7.61133 1.15835 7.6748 1.06155 7.77441 1.02065C7.87305 0.979209 7.98633 1.00228 8.0625 1.07809L12.9229 5.95272C12.9717 6.00246 13 6.06972 13 6.14016C13 6.21053 12.9717 6.27785 12.9229 6.3276L8.0625 11.1996C7.98633 11.2755 7.87305 11.2982 7.77441 11.2571C7.6748 11.2162 7.61133 11.1193 7.61133 11.0122V8.63198C7.27206 8.64622 6.93786 8.6877 6.61133 8.75459C4.73019 9.13999 3.1032 10.3691 2.22344 12.0945C2.20469 12.1312 2.18628 12.1682 2.16822 12.2055C2.10315 12.3395 2.04253 12.4765 1.98662 12.6161C1.959 12.6851 1.93253 12.7547 1.90723 12.825C1.88574 12.8841 1.84473 12.932 1.79395 12.9627C1.75391 12.9867 1.70703 13.0001 1.6582 13.0003C1.54688 13.0003 1.44824 12.9306 1.41016 12.8261C1.38532 12.7579 1.3616 12.6893 1.339 12.6205L1.33815 12.6179C1.28822 12.4655 1.24379 12.3116 1.20487 12.1563C1.19106 12.1012 1.17794 12.0459 1.16552 11.9905C1.05542 11.4989 1 10.9943 1 10.4821C1 6.77071 3.94238 3.73507 7.61133 3.59499V1.26553ZM21.1889 10.5001C21.7473 10.5001 22.2 10.9479 22.2 11.5001V14.5001C22.2 15.0524 21.7473 15.5001 21.1889 15.5001H16.3019C15.7435 15.5001 15.2908 15.0524 15.2908 14.5001V11.5001C15.2908 10.9479 15.7435 10.5001 16.3019 10.5001H21.1889ZM17.8186 14.0001C17.2601 14.0001 16.8074 13.5524 16.8074 13.0001C16.8074 12.4479 17.2601 12.0001 17.8186 12.0001C18.377 12.0001 18.8297 12.4479 18.8297 13.0001C18.8297 13.5524 18.377 14.0001 17.8186 14.0001Z' fill='white'/%3E%3C/svg%3E%0A",
    selectAddress: "data:image/svg+xml,%3Csvg width='19' height='14' viewBox='0 0 19 14' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.68517 14C0.754478 14 0 13.2538 0 12.3333V1.66667C0 0.746192 0.754478 0 1.68517 0H15.6721C16.6028 0 17.3573 0.746193 17.3573 1.66667V3.33999C17.3573 3.42984 17.2796 3.5 17.1888 3.5L12.3018 3.5C11.1849 3.5 10.2796 4.39543 10.2796 5.5V8.5C10.2796 9.60457 11.1849 10.5 12.3018 10.5H17.1888C17.2796 10.5 17.3573 10.5702 17.3573 10.66V12.3333C17.3573 13.2538 16.6028 14 15.6721 14L1.68517 14Z' fill='white'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M17.1889 4.50002C17.7473 4.50002 18.2 4.94773 18.2 5.50002V8.50002C18.2 9.05231 17.7473 9.50002 17.1889 9.50002H12.3019C11.7435 9.50002 11.2908 9.05231 11.2908 8.50002V5.50002C11.2908 4.94773 11.7435 4.50002 12.3019 4.50002H17.1889ZM13.8185 8.00002C13.2601 8.00002 12.8074 7.5523 12.8074 7.00002C12.8074 6.44773 13.2601 6.00002 13.8185 6.00002C14.377 6.00002 14.8297 6.44773 14.8297 7.00002C14.8297 7.5523 14.377 8.00002 13.8185 8.00002Z' fill='white'/%3E%3C/svg%3E%0A",
};
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const toLower = (text) => {
    if (text === null || text === void 0 ? void 0 : text.length) {
        return text.toLowerCase();
    }
    return text;
};
const isInstalled = async () => {
    await delay(500);
    return document.documentElement.getAttribute('sh-ex-status') === 'installed';
};
exports.isInstalled = isInstalled;
const addCustomEventListener = (selector, event, handler) => {
    const rootElement = document.querySelector('body');
    if (rootElement) {
        rootElement.addEventListener(event, (evt) => {
            let targetElement = evt.target;
            while (targetElement != null) {
                if (targetElement.matches(selector)) {
                    handler(evt);
                    return;
                }
                targetElement = targetElement.parentElement;
            }
        }, true);
    }
};
addCustomEventListener('#sh-button', 'mouseover', () => {
    const element = document.getElementById('sh-button');
    element.style.backgroundColor = '#31A76C';
    element.style.cursor = 'pointer';
});
addCustomEventListener('#sh-button', 'mouseleave', () => {
    const element = document.getElementById('sh-button');
    element.style.backgroundColor = '#3FBB7D';
    element.style.cursor = 'default';
});
addCustomEventListener('#sh-send-button', 'mouseover', () => {
    const element = document.getElementById('sh-send-button');
    element.style.backgroundColor = '#31A76C';
    element.style.cursor = 'pointer';
});
addCustomEventListener('#sh-send-button', 'mouseleave', () => {
    const element = document.getElementById('sh-send-button');
    element.style.backgroundColor = '#3FBB7D';
    element.style.cursor = 'default';
});
const createButton = (size) => {
    const findExist = document.getElementById('sh-button');
    if (findExist) {
        findExist.remove();
    }
    const button = document.createElement('div');
    button.id = 'sh-button';
    button.style.width = size === 'large' ? '130px' : '34px';
    button.style.height = '34px';
    button.style.backgroundColor = '#3FBB7D';
    button.style.borderRadius = '6px';
    button.style.display = 'flex';
    button.style.flexDirection = 'row';
    button.style.alignItems = 'center';
    button.style.position = 'relative';
    return button;
};
const createButtonLabel = () => {
    const findExist = document.getElementById('sh-label');
    if (findExist) {
        findExist.remove();
    }
    const label = document.createElement('span');
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
const createLogo = (size) => {
    const findExist = document.getElementById('sh-logo');
    if (findExist) {
        findExist.remove();
    }
    const logo = document.createElement('img');
    logo.id = 'sh-logo';
    logo.src = icons.selectAddress;
    logo.style.width = '18.2px';
    logo.style.height = '14px';
    if (size === 'large') {
        const logoRow = document.createElement('div');
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
const createCurrencyLogo = (logo, background) => {
    const currencyLogoRow = document.createElement('div');
    currencyLogoRow.id = 'sh-currency-logo';
    const currencyLogo = document.createElement('img');
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
const init = (params) => {
    var _a;
    if (document.documentElement.getAttribute('sh-ex-status') === 'installed') {
        const { buttonId, inputId, size } = params;
        const getButton = document.getElementById(buttonId);
        const getInput = document.getElementById(inputId);
        if (getButton && getInput) {
            const button = createButton(size);
            const logo = createLogo(size);
            button.appendChild(logo);
            if (size === 'large') {
                const buttonLabel = createButtonLabel();
                button.appendChild(buttonLabel);
            }
            getInput.setAttribute('sh-input', 'address');
            (_a = document.getElementById(buttonId)) === null || _a === void 0 ? void 0 : _a.replaceWith(button);
        }
    }
};
exports.init = init;
const setCurrency = (symbol, chain) => {
    const checkExist = currencies_1.default.find((currency) => {
        const findBySymbol = toLower(currency.symbol) === toLower(symbol);
        if (chain === null || chain === void 0 ? void 0 : chain.length) {
            return findBySymbol && toLower(currency.chain) === toLower(chain);
        }
        return findBySymbol;
    });
    const findCurrencyLogo = document.getElementById('sh-currency-logo');
    if (findCurrencyLogo) {
        findCurrencyLogo.remove();
    }
    if (checkExist) {
        const { logo, background, chain: existChain } = checkExist;
        const findButton = document.getElementById('sh-button');
        if (findButton) {
            findButton.removeAttribute('sh-currency-chain');
            const currencyLogo = createCurrencyLogo(logo, background);
            findButton.appendChild(currencyLogo);
            findButton.setAttribute('sh-currency', symbol);
            if (existChain) {
                findButton.setAttribute('sh-currency-chain', existChain);
            }
        }
    }
    else {
        new Error('Currency was not found');
    }
};
exports.setCurrency = setCurrency;
const removeCurrency = () => {
    const findButton = document.getElementById('sh-button');
    const findCurrencyLogo = document.getElementById('sh-currency-logo');
    if (findButton && findCurrencyLogo) {
        findButton.removeAttribute('sh-currency');
        findButton.removeAttribute('sh-currency-chain');
        findCurrencyLogo.remove();
    }
};
exports.removeCurrency = removeCurrency;
const getCurrencies = () => {
    return currencies_1.default;
};
exports.getCurrencies = getCurrencies;
const getSendButton = (type, size, buttonId) => {
    const findExist = document.getElementById(buttonId);
    if (findExist) {
        findExist.remove();
    }
    const button = document.createElement('div');
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
const getSendLogo = (size) => {
    const logo = document.createElement('img');
    logo.id = 'sh-send-logo';
    logo.src = icons.send;
    logo.style.width = '22.2px';
    logo.style.height = '20px';
    logo.style.margin = size === 'small' ? '4px 0 0 4px' : '10px 0 0 10px';
    return logo;
};
const getSendLabelRow = () => {
    const sendLabelRow = document.createElement('div');
    sendLabelRow.style.display = 'flex';
    sendLabelRow.style.flexDirection = 'row';
    sendLabelRow.style.alignItems = 'center';
    sendLabelRow.style.margin = '0 0 0 14px';
    return sendLabelRow;
};
const getSendLabel = () => {
    const sendLabel = document.createElement('span');
    sendLabel.innerText = 'Send with';
    sendLabel.style.fontWeight = '500';
    sendLabel.style.fontSize = '13px';
    sendLabel.style.lineHeight = '15px';
    sendLabel.style.color = '#FFFFFF';
    sendLabel.style.fontFamily = 'Roboto';
    return sendLabel;
};
const getSendShLabel = () => {
    const sendShLabel = document.createElement('span');
    sendShLabel.innerText = 'SimpleHold';
    sendShLabel.style.margin = '0 0 0 2px';
    sendShLabel.style.fontWeight = 'bold';
    sendShLabel.style.fontSize = '13px';
    sendShLabel.style.lineHeight = '15px';
    sendShLabel.style.color = '#FFFFFF';
    sendShLabel.style.fontFamily = 'Roboto';
    return sendShLabel;
};
const getSendLogoRow = () => {
    const sendLogoRow = document.createElement('span');
    sendLogoRow.style.width = '46px';
    sendLogoRow.style.height = '46px';
    sendLogoRow.style.borderRadius = '23px';
    sendLogoRow.style.position = 'absolute';
    sendLogoRow.style.right = '-5px';
    sendLogoRow.style.background = 'rgba(255, 255, 255, 0.2)';
    return sendLogoRow;
};
const createSendButton = (params) => {
    var _a;
    if (document.documentElement.getAttribute('sh-ex-status') === 'installed') {
        const { buttonId, size = 'small', readOnly = false, currency = undefined, amount = undefined, recipientAddress = undefined, chain = undefined, } = params;
        const getButton = document.getElementById(buttonId);
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
            }
            else {
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
            (_a = document.getElementById(buttonId)) === null || _a === void 0 ? void 0 : _a.replaceWith(button);
        }
    }
};
exports.createSendButton = createSendButton;
