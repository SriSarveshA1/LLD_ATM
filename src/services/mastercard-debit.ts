import { ICard } from "../interfaces/card";
import { Card } from "../models/card";

export class MastercardDebitCard implements ICard {
    private readonly card: Card;

    constructor(card: Card) {
        this.card = card;
    }

    validatePin(pin: string): boolean {
        return true;
    }

    getBalance(): number {
        return 0;
    }

    validateWithdrawal(amount: number): boolean {
        return true;
    }

    doWithdrawal(amount: number): void {
        return;
    }
}