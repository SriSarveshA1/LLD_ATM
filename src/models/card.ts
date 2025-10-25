import { CardNetworkType } from "../enums/enums";

import { CardType } from "../enums/enums";

export class Card {
    private readonly cardNumber: string;
    private readonly cardType: CardType;
    private readonly cardNetworkType: CardNetworkType;

    constructor(cardNumber: string, cardType: CardType, cardNetworkType: CardNetworkType) {
        this.cardNumber = cardNumber;
        this.cardType = cardType;
        this.cardNetworkType = cardNetworkType;
    }

    getCardNumber(): string {
        return this.cardNumber;
    }

    getCardType(): CardType {
        return this.cardType;
    }

    getCardNetworkType(): CardNetworkType {
        return this.cardNetworkType;
    }
}