export interface ICurrency {
    symbol: string;
    background: string;
    type: 'currency' | 'token';
    chain?: 'eth' | 'bsc';
    logo: string;
}
declare const currencies: ICurrency[];
export default currencies;
