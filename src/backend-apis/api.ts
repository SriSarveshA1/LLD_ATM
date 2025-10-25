import { ATMState } from "../enums/enums";
import { IBackendAPIs } from "../interfaces/backend-api";

export class NodejsBackendAPIs implements IBackendAPIs {
    initiateTransaction(atmId: string): string {
        // Simulating random trnsactionId generator
        // But ideally we will be calling some api from backend which check's the atmId has any current active transaction or not and then
        // returns the new transactionId.
        return "TRAN_"+Math.ceil(Math.random()*1000)
    }

    cancelTransaction(transactionId: string): void {
        // This is a mock implementation of the cancelTransaction method.
        return;
    }

    updateATMState(atmId: string, state: ATMState): void {
        // This is a mock implementation of the updateATMState method.
        return;
    }

    getATMState(atmId: string): ATMState {
        // This is a mock implementation of the getATMState method.
        return "" as ATMState;
    }

    getATMBalance(atmId: string): number {
        // This is a mock implementation of the getATMBalance method.
        return 0;
    }
}