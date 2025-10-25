import { IBackendAPIs } from "../interfaces/backend-api";
import { IATMState } from "../interfaces/state";

export class ATMService {
    private state: IATMState; 
    private readonly ATMId: string;    
    private readonly backendAPI: IBackendAPIs;

    constructor(state: IATMState, ATMId: string,backendAPI:IBackendAPIs){
        this.state = state,
        this.ATMId = ATMId,
        this.backendAPI = backendAPI
    }

    changeState(state:IATMState){
        this.state = state;
        this.backendAPI.updateATMState(this.ATMId,this.state.getCurrentState())
    }
} 