// Here we will have the factory method for the card.
// So based on the card type and network type, we will return the appropriate card service.
import { CardType, CardNetworkType } from "../../enums/enums";
import { ICard } from "../../interfaces/card";
import { Card } from "../../models/card";
import { MastercardCreditCard } from "../../services/mastercard-credit";
import { VisaCreditCard } from "../../services/visa-credit";
import { MastercardDebitCard } from "../../services/mastercard-debit";
import { VisaDebitCard } from "../../services/visa-debit";


export class CardServiceFactory{
    
    static returnCardService(card:Card):ICard{
        const cardMapBasedOnType = {
            [CardType.CREDIT]: {
                [CardNetworkType.MASTERCARD]: new MastercardCreditCard(card),
                [CardNetworkType.VISA]: new VisaCreditCard(card)
            },
            [CardType.DEBIT]:{
                [CardNetworkType.MASTERCARD]: new MastercardDebitCard(card),
                [CardNetworkType.VISA]: new VisaDebitCard(card)
            }            
        }
        return cardMapBasedOnType[card.getCardType()][card.getCardNetworkType()]
    }
}