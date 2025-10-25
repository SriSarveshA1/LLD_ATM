import { ATMState } from "../enums/enums";
import { Card } from "../models/card";
import {functionalityOptions} from "../constants/atm-functionality-options"

export interface IATMState {
    card:Card; 
    // This is the interface for the ATM state. which tells what are the operations that can be performed in this state.
    initTransaction:(ATMId:string)=> string;

    readCardDetailsAndPin:(pin:string,transactionId:string)=>void;

    chooseOptions:(options:typeof functionalityOptions, option:number,transactionId:string)=>void;

    readWithdrawDetailsAndPin:(amount:number, pin:string,transactionId:string)=>void;

    dispenseCash:(amount:number,transactionId:string)=>void;

    cancelTransaction:(transactionId:string)=>void;

    ejectCard:(transactionId:string)=>void;

    getCurrentState:()=> ATMState;
}
