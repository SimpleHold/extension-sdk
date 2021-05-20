import { ICurrency } from './currencies';
export interface IParams {
    buttonId: string;
    inputId: string;
    size?: 'small' | 'large';
    currency?: string;
}
export interface ISendButtonParams {
    buttonId: string;
    size: 'small' | 'large';
    readOnly?: boolean;
    currency?: string;
    amount?: number;
    recipientAddress?: string;
    chain?: string;
}
export declare const isInstalled: () => Promise<boolean>;
export declare const init: (params: IParams) => void;
export declare const setCurrency: (symbol: string, chain?: "eth" | "bsc" | undefined) => void;
export declare const removeCurrency: () => void;
export declare const getCurrencies: () => ICurrency[];
export declare const createSendButton: (params: ISendButtonParams) => void;
