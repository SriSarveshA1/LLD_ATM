
export interface ICard {
    validatePin:(pin: string) => boolean; 
    getBalance:() => number;
    validateWithdrawal:(amount: number) => boolean; 
    doWithdrawal:(amount: number) => void; 
}