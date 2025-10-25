import { ATMState } from "../enums/enums";

export interface IBackendAPIs {
    initiateTransaction:(atmId: string) => string; 
    cancelTransaction:(atmId: string, transactionId: string) => void;  
    updateATMState:(atmId: string, state: ATMState) => void;
    getATMState:(atmId: string) => ATMState;  
    getATMBalance:(atmId: string) => number;   
}