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

export const championshipWinnerIntent = (conv: DialogflowConversation, params) => {
    let data = championshipWinners[params.category][params.year.endDate.slice(0,4)];
    if (data) {
        conv.ask(data);
    } else {
        conv.ask("Désolé je ne peux répondre à cette question");
    }
}
