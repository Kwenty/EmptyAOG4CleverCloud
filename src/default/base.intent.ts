import {
    Dialogflow,
    DialogflowConversation, Parameters
} from 'actions-on-google'
import {championshipWinners, messages} from '../constants';

export const helpIntent = (conv: DialogflowConversation) => {
    conv.ask(messages.help);
}

export const welcomeIntent = (conv: DialogflowConversation) => {
    conv.ask(messages.welcome);
}

export const byeIntent = (conv: DialogflowConversation) => {
    conv.ask(messages.goodbye);
}

export const championShipWinnerIntent = (conv: DialogflowConversation, params) => {
    console.log(params);
    conv.ask("test");
    // conv.ask(championshipWinners[params.category][params.year]);
}
