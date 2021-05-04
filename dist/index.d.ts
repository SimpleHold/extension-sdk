import { ICurrency } from './currencies';
export interface IParams {
    buttonId: string;
    inputId: string;
    size?: 'small' | 'big';
    currency?: string;
}
export declare const isInstalled: () => Promise<boolean>;
export declare const init: (params: IParams) => void;
export declare const setCurrency: (symbol: string, chain?: "eth" | "bsc" | undefined) => void;
export declare const removeCurrency: () => void;
export declare const getCurrencies: () => ICurrency[];
